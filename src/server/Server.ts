import { Identifiers } from "./constants/Identifiers";
import * as express from "express";
import { Express, Request, Response, NextFunction } from "express";
import * as request from "request";
import { injectable, inject } from "inversify";
import { DataService } from "./services/interfaces/dataService/DataService";

const expressPort = 8081;

@injectable()
export default class ApplicationServer {
    private app: Express = express();

    @inject(Identifiers.StaticDataService)
    private staticDataService: DataService;

    @inject(Identifiers.RandomDataSerice)
    private randomDataService: DataService;

    public run() {
        this.app.get("/*", express.static("client"));
        this.app.get("/data/static", (req, res, next) => { this.staticDataHandler(req, res, next); });
        this.app.get("/data/static/:id", (req, res, next) => { this.staticDataHandler(req, res, next); });
        this.app.get("/data/random", (req, res, next) => { this.randomDataHandler(req, res, next); });
        this.app.get("/data/random/:id", (req, res, next) => { this.randomDataHandler(req, res, next); });
        this.app.listen(expressPort, function () {
            console.log("\x1b[36m%s\x1b[0m", `App listening on port ${expressPort}!`);
        });
    }

    private staticDataHandler(req: Request, res: Response, next: NextFunction): void {
        if (req.params["id"]) {
            const id = parseInt(req.params["id"]);
            const item = this.staticDataService.getData(id);
            res.send(item);
        } else {
            res.send(this.staticDataService.getAllData());
        }
    }

    private randomDataHandler(req: Request, res: Response, next: NextFunction): void {
        if (req.params["id"]) {
            const item = this.randomDataService.getData(0);
            res.send(item);
        } else {
            res.send(this.randomDataService.getAllData());
        }
    }
}