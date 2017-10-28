import * as fs from "fs";
import { injectable } from "inversify";
import { DataService } from "../../interfaces/dataService/DataService";
import { DataItem } from "./../../../../common/model/interfaces/DataItem";
import { data } from "./StaticData";

@injectable()
export default class StaticDataService implements DataService  {
    private data: DataItem[] = data;

    getAllData(): DataItem[] {
        return this.data;
    }
    getData(id: number): DataItem {
        return this.data[id];
    }
}