require('dotenv').config();

import express from "express";

import routes from "./routes";

class App {

    public app = express();

    constructor() {
        this.app;
        this.use();
        this.routes();
    }

    private use(): void {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use('/', routes);
    }
};

export default new App().app;