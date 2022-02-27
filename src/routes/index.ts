import { Router } from "express";

import index from "../controller/index";
const routes = Router();

// Router
routes.get('/', index.index);

export default routes;