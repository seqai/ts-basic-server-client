import { DataItemSummary } from "../../../common/model/interfaces/DataItemSummary";
import { DataItem } from "../../../common/model/interfaces/DataItem";

interface DataItemDto {
    name: string;
    value: number;
    date: string;
    flag: boolean;
}

export default class DataServiceHelper {
    public static ParseSummary(raw: string): DataItemSummary[] {
        return <DataItemSummary[]> JSON.parse(raw);
    }

    public static ParseItem(raw: string): DataItem {
        const dtoItem = <DataItemDto> JSON.parse(raw);
        return {
            ...dtoItem,
            date: new Date(dtoItem.date)
        };
    }
}