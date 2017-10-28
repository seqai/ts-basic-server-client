import { DataItem } from "./../../../../common/model/interfaces/DataItem";

export interface DataService {
    getAllData(): DataItem[];
    getData(id: number): DataItem;
}