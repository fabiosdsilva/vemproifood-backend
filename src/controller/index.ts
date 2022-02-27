import { Request, Response } from "express";

import ApiWeatherMap from "../services/weathermap/getApiWeathermap";
import ApiSpotiyWeb from "../services/spotify/getApiSpotify";

type WetaherMap = string | number;

class Index {
   async index(req: Request, res: Response) {
       try {
          const result: WetaherMap = await ApiWeatherMap.index();

          return res.json(await ApiSpotiyWeb.getPlayList('workout'));

       } catch (e) {
           const errror: string[] = [`${e}`];
           return res.status(401).json({ errror });
       };
   };

   async login(req: Request, res: Response) {
       return res.redirect(ApiSpotiyWeb.getToken());
   };
};

export default new Index();