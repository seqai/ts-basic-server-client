import * as fs from "fs";
import { injectable } from "inversify";
import { DataService } from "../../interfaces/dataService/DataService";
import { DataItem } from "./../../../../common/model/interfaces/DataItem";
import { data } from "./StaticData";
import { DataItemSummary } from "../../../../common/model/interfaces/DataItemSummary";

@injectable()
export default class StaticDataService implements DataService  {
    private data: DataItem[] = data;

    getAllData(): DataItemSummary[] {
        return this.data.map(item => {
            return { name: item.name };
        });
    }
    getData(id: number): DataItem {
        return this.data[id];
    }
}