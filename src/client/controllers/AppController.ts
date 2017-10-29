import { DataRetrieverService } from "./../services/interfaces/dataRetrieverService/DataRetrieverService";
import { DataItemSummary } from "./../../common/model/interfaces/DataItemSummary";
import { injectable, inject } from "inversify";
import { ClientIdentifiers } from "../constants/ClientIdentifiers";
import { DataItem } from "../../common/model/interfaces/DataItem";

const staticServiceUrl = "/data/static";

@injectable()
export default class AppController {
    @inject(ClientIdentifiers.DataRetrieverServiceFactory)
    private dataRetrieverServiceFactory: (string) => DataRetrieverService;
    private staticdataRetrieverService: DataRetrieverService;

    public init() {
        this.staticdataRetrieverService = this.dataRetrieverServiceFactory(staticServiceUrl);
        this.getSummary();
    }

    private clear(el: HTMLElement) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }

    private printDetails(item: DataItem) {
        const staticDataBlock = document.getElementById("info");
        this.clear(staticDataBlock);
        const el = document.createElement("div");
        el.innerText = `${item.name} ${item.value} ${new Date(item.date).toLocaleDateString()} ${item.flag}`;
        staticDataBlock.appendChild(el);
    }

    private printSummary(items: DataItemSummary[]) {
        const staticDataBlock = document.getElementById("staticData");
        this.clear(staticDataBlock);
        const fragment = document.createDocumentFragment();
        items.forEach((item, index) => {
            const el = document.createElement("div");
            const link = document.createElement("a");
            link.innerText = `${index} ${item.name}`;
            link.href = "#";
            link.addEventListener("click", () => {
                this.getDetails(index);
            });
            el.appendChild(link);
            fragment.appendChild(el);
        });
        staticDataBlock.appendChild(fragment);
    }

    private async getSummary() {
        const summary = await this.staticdataRetrieverService.getDataSummary();
        this.printSummary(summary);
    }

    private async getDetails(id: number) {
        const details = await this.staticdataRetrieverService.getData(id);
        this.printDetails(details);
    }
}