import AppController from "./controllers/AppController";
import { ClientIdentifiers } from "./constants/ClientIdentifiers";
import { clientContainer } from "./config/inversify.config";

const appController = clientContainer.get<AppController>(ClientIdentifiers.AppController);
appController.init();