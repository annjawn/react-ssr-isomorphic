import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer'
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/routes';
import proxy from 'express-http-proxy';


const app = express();

//proxy setup for authentication with SSR
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts){
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}))

//the public directory will be used to load the client bundle.js
//for broswer side rendering instead of build/bundle.js which is for SSR
app.use(express.static('public'));

//"*" means that express will hand over all paths to react router
//and let react router handle it as defined in routes.js. For server
//side rendering we will use StaticRouter (from react-router-dom) to pass
//an absolute path as defined by req.path
app.get('*', (req,res) =>{
  const store = createStore(req);

  //some logic to initialize and load data into the store
  const promises = matchRoutes(Routes, req.path)
                  .map(({ route }) => {
                            return route.loadData ? route.loadData(store): null;
                          })
                  .map( promise => { //wrap individual promise in another promise
                    if (promise){
                      return new Promise((resolve, reject) => {
                        promise.then(resolve).catch(resolve);
                      });
                    }
                  });

//Promise.all takes an array of promise and returns when all promises are resolved
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url){
      return res.redirect(303, context.url);
    }

    if (context.notFound){
      res.status(404);
    }
    res.send(content);
  });
});

// start listening to port 3000
app.listen(3000, () =>{
  console.log('Listening to port 3000');
});
