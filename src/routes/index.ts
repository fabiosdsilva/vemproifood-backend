import { Router } from "express";

import index from "../controller/index";

const routes = Router();

// Spotify
routes.get('/', index.index);
routes.get('/login', index.login);

export default routes;