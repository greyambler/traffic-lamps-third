import { IDataBaseLocal, ILampaMain } from "../interfaces/index.d";

export class DataBaseLocal implements IDataBaseLocal {
  saveCurrentLamps(curLampa: ILampaMain) {
    localStorage.setItem("curLampa", JSON.stringify(curLampa));
    console.log(
      `${curLampa.idLampa} step ${
        curLampa.timeInterval / 1000
      } \t\t${new Date().toLocaleTimeString()}`
    );
  }

  saveLampsTraffic(lampsTraffic: ILampaMain[]): void {
    localStorage.setItem("listLamps", JSON.stringify(lampsTraffic));
  }
  loadLampsTraffic(): ILampaMain[] {
    return JSON.parse(localStorage.getItem("listLamps"));
  }

  getItemCurLampa(): ILampaMain {
    return JSON.parse(localStorage.getItem("curLampa")) as ILampaMain;
  }
}
