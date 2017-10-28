import { Container, interfaces } from "inversify";
import { Identifiers } from "../constants/Identifiers";
import { DataService } from "../services/interfaces/dataService/DataService";
import ApplicationServer from "../Server";
import StaticDataService from "../services/entities/staticDataService/StaticDataService";
import RandomDataSerice from "../services/entities/randomDataService/RandomDataService";

const container = new Container({ defaultScope: "Singleton" });

container.bind<ApplicationServer>(Identifiers.ApplicationServer).to(ApplicationServer);
container.bind<DataService>(Identifiers.StaticDataService).to(StaticDataService);
container.bind<DataService>(Identifiers.RandomDataSerice).to(RandomDataSerice);

export { container };