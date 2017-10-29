import { DataRetrieverService } from "./../services/interfaces/dataRetrieverService/DataRetrieverService";
import { Container, interfaces } from "inversify";
import AppController from "../controllers/AppController";
import { ClientIdentifiers } from "../constants/ClientIdentifiers";
import UniversalDataRetrieverService from "../services/entities/universalDataRetrieverService/UniversalDataRetrieverService";
import { DataRetrieverServiceFactory } from "./Factories/dataRetrieverServiceFactory";

const clientContainer = new Container({ defaultScope: "Singleton" });

clientContainer.bind<AppController>(ClientIdentifiers.AppController).to(AppController);
clientContainer.bind<interfaces.Factory<DataRetrieverService>>(ClientIdentifiers.DataRetrieverServiceFactory).toFactory<DataRetrieverService>(DataRetrieverServiceFactory);

export { clientContainer };