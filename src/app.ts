import e from "express";
import express from "express";
import morgan from "morgan";
import indexRoute from "./routes/indexRoutes"
class Application {
    app: express.Application;
    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set("port", process.env.PORT || 8000);
    }
    start() {
        const port = this.app.get("port");
        this.app.listen(port, () => {
            console.log(`Server runninmg in port ${port}`);
        });
    }
    middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded( {
            extended: false
        }));
    }
    routes() {
        this.app.use(indexRoute);
    }
}
export default Application;