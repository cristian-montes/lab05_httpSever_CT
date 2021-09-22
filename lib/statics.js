import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const staticRoutes = async (req) => {
  if(req.method !== 'GET') return null;
  try{
    if(req.url === '/'){
      const url = 'index.html';
      const toUrl = path.join(__dirname, '../public', url);
      const theRead = await readFile(toUrl, 'utf-8');
      return theRead;

    }  else if(req.url === '/css/main.css'){
      
      const toUrl = path.join(__dirname, '../public', '/css/main.css');
      const theRead = await readFile(toUrl, 'utf-8');
      return theRead;
    }

  } catch(error){
    return null;
  } 
};

export default staticRoutes;
