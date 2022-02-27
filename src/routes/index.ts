import { Router } from "express";

import index from "../controller/index";

const routes = Router();
// Router
routes.get('/', index.index);

// Spotify
routes.get('/spotify', index.spotify);

routes.get('/login', index.login);


export default routes;