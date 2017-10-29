import { DataItemSummary } from "./../../../../common/model/interfaces/DataItemSummary";
import { DataItem } from "./../../../../common/model/interfaces/DataItem";

export interface DataRetrieverService {
    getDataSummary(): Promise<DataItemSummary[]>;
    getData(id: number): Promise<DataItem>;
}