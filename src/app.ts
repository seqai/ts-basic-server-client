import "reflect-metadata";
import { Identifiers } from "./server/constants/Identifiers";
import { container } from "./server/config/inversify.config";
import ApplicationServer from "./server/Server";

const app = container.get<ApplicationServer>(Identifiers.ApplicationServer);
app.run();