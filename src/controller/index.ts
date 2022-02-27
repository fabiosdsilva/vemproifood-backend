import { Request, Response } from "express";

import ApiWeatherMap from "../services/weathermap/apiWeathermap";

type WetaherMap = string | number;

class Index {
   async index(req: Request, res: Response) {
       // City, Lon, Lag
       try {
          const result: WetaherMap = await ApiWeatherMap.index() ;
          return res.json(result);

       } catch (e) {
           const errror: string[] = [`${e}`];
           return res.status(401).json({ errror });
       };
   };
};

export default new Index();