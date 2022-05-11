import { ILampaMain } from "../interfaces/index.d";

export function saveCurrentLamps(curLampa: ILampaMain) {
  localStorage.setItem("curLampa", JSON.stringify(curLampa));
  console.log(
    `${curLampa.idLampa} step ${
      curLampa.timeInterval / 1000
    } \t\t${new Date().toLocaleTimeString()}`
  );
}

export function saveLampsTraffic(lampsTraffic: ILampaMain[]): void {
  localStorage.setItem("listLamps", JSON.stringify(lampsTraffic));
}
export function loadLampsTraffic(): ILampaMain[] {
  return JSON.parse(localStorage.getItem("listLamps"));
}

export function getItemCurLampa(): ILampaMain {
    return JSON.parse(localStorage.getItem("curLampa")) as ILampaMain;
  }
  
