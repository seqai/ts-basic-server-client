import { DataItem } from "./../../../../common/model/interfaces/DataItem";
import { DataItemSummary } from "../../../../common/model/interfaces/DataItemSummary";

export interface DataService {
    getAllData(): DataItemSummary[];
    getData(id: number): DataItem;
}