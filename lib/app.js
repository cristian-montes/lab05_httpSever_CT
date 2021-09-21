import staticRoutes from './statics.js';

// const routes = {
//   routToFiles : staticRoutes
// };



const app = async (req, res) => {

  const statics = await staticRoutes(req);
  console.log('my route', statics);

  if(statics){

    res.statusCode = 200;
    res.end(statics); 
    return;
  }


  //   const [, resource] = req.url.split('/');

  //   console.log('url', req.url);

  //   const route = routes[resource]; 
  //   console.log('route', routes.routToFiles); 

  //   if(route){
  //     try{
  //       const routeHandler = route[req.method.toLowerCase()];
  //       await routeHandler(req, res);
  //     }catch(error) {
  //       res.statusCode = 500;
  //       res.end(error);
  //     } 

//   } else{
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>Not Found</h1></body></html>');
//   }
};

export default app;

