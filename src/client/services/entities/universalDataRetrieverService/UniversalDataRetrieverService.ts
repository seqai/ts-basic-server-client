import { DataRetrieverService } from "./../../interfaces/dataRetrieverService/DataRetrieverService";
import { DataItemSummary } from "../../../../common/model/interfaces/DataItemSummary";
import { DataItem } from "../../../../common/model/interfaces/DataItem";
import DataServiceHelper from "../../../helpers/dataServiceHelper/DataServiceHelper";
import HttpHelper from "../../../helpers/httpHelper/HttpHelper";

export default class UniversalDataRetrieverService implements DataRetrieverService {
    constructor(private serviceLink: string) {
    }
    getDataSummary(): Promise<DataItemSummary[]> {
        return HttpHelper.request("GET", this.serviceLink)
            .then(responseText => {
                return DataServiceHelper.ParseSummary(responseText);
            });
    }

    getData(id: number): Promise<DataItem> {
        return HttpHelper.request("GET", `${this.serviceLink}/${id}`)
            .then(responseText => {
                return DataServiceHelper.ParseItem(responseText);
            });
    }
}