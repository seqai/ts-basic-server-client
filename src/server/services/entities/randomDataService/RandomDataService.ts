import * as fs from "fs";
import { injectable } from "inversify";
import { DataService } from "../../interfaces/dataService/DataService";
import { DataItem } from "./../../../../common/model/interfaces/DataItem";
import { DataItemSummary } from "../../../../common/model/interfaces/DataItemSummary";

const names: string[] = ["Venus", "Bogatyr", "Baron", "Red Snapper"];

@injectable()
export default class RandomDataSerice implements DataService  {
    getAllData(): DataItemSummary[] {
        return [this.generateItem(), this.generateItem(), this.generateItem()].map(item => {
            return { name: item.name };
        });
    }

    getData(id: number): DataItem {
        return this.generateItem();
    }

    private generateItem(): DataItem {
        return {
            name: names[Math.round(Math.random() * 4)],
            value: Math.round(Math.random() * 100) * 100,
            date: new Date(1700 + Math.round(Math.random() * 400), 1, 1),
            flag: Math.random() * 2 < 1
        };
    }
}