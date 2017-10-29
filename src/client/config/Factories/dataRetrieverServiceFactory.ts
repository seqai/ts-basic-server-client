import { interfaces } from "inversify";
import { DataRetrieverService } from "./../../services/interfaces/dataRetrieverService/DataRetrieverService";
import UniversalDataRetrieverService from "../../services/entities/universalDataRetrieverService/UniversalDataRetrieverService";

export function DataRetrieverServiceFactory(context: interfaces.Context): (string) => DataRetrieverService {
    return (serviceLink: string) => {
        return new UniversalDataRetrieverService(serviceLink);
    };
}