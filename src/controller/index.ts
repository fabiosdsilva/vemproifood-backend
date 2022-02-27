import { Request, Response } from "express";
import {parse, stringify, toJSON, fromJSON} from 'flatted';
import axios from "axios";

type WetaherMap = string | number;

class Index {
   async index(req: Request, res: Response) {
       // City, Lon, Lag
       try {
           const wetaherMap: WetaherMap = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=campinas&appid=b77e07f479efe92156376a8b07640ced');
           if (wetaherMap) {
               return res.json(wetaherMap.data);
           };
       } catch (e) {
           const errror: string[] = [`${e}`];
           return res.status(401).json({ errror });
       };
   };
};

export default new Index();