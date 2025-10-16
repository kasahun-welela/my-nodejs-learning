import { format } from 'date-fns';
import {v4 as uuid } from 'uuid'
import path from 'path'
import fsPromises from "fs/promises"
import fs from "fs"
import { fileURLToPath } from 'url';

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const logEvent = async (messages)=>{
 const dateTime= format(new Date(), 'yyyy-MM-dd\thh:MM:ss')
 const logItems= `${dateTime}\t${uuid()}\t${messages} \n`
 try{
    if(!fs.existsSync(path.join(__dirname,"logs")))
    {
        await fsPromises.mkdir(path.join(__dirname,"logs"))
    }
    await fsPromises.appendFile(path.join(__dirname, 'logs','logs'), logItems)
 } catch(err)
 {
    console.error(err)
 }

}

