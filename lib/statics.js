import { readFile } from 'fs/promises';
import path from 'path';

const rootDir = './public';
const toHtml = '/index.html';
const toCss =  '/css/main.css';

const staticRoutes = async (req) => {
  if(req.method !== 'GET') return null;

//   const url = req.url === '/' ? 'index'

//   if(url === '/')
  
  try{
    const toFile = path.join(rootDir, toCss);

    const theRead = await readFile(toFile, 'utf-8');
    return theRead;

  } catch(error){
    return null;
  } 
};

export default staticRoutes;
