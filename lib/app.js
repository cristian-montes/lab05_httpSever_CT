


const app = async (req, res) => {
  const [, resource] = req.url.split('/');
  const route = routes[resource];     // this will get happy once we import the correct routes. 

  if(route){
    try{
      const routeHandler = route[req.method.toLowerCase()];
      await routeHandler(req, res);
    }catch(error) {
      res.statusCode = 500;
      res.end(error);
    } 

  } else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Not Found</h1></body></html>');
  }
};

export default app;

