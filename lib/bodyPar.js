const bodyParser =  (req) => {

  if(req.method !== 'POST' || req.method !== 'PUT' || req.method !== 'PATCH'){
    return null;
  } else if(req.body !== 'application/json'){
    return 'incorrent type';
  } 




  
  //   return new Promise((resolve, reject) => {
  // else if(!req.body){
  //   reject();
  //   return 'incorrect content-type';

  // } else if(req.body){
  //   resolve();
  //   return JSON.parse(req.body);
  // } else {
  //   reject();
  //   return 'not parsed';
  // }
    
  //   });


};

export default bodyParser;
