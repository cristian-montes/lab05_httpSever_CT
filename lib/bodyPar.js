const bodyParser =  (req) => {

  if(req.method !== 'POST' || req.method !== 'PUT' || req.method !== 'PATCH'){
    return null;
  } else if(req.body !== 'application/json'){
    return 'incorrent type';
  } 

};

export default bodyParser;
