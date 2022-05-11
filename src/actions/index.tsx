import { Lampa } from "../controls/lampa";
import { Traffic } from "../controls/traffic";
import { loadLampsTraffic, saveLampsTraffic } from "../database";
import { ILampa, ILampaMain, ITraffic } from "../interfaces/index.d";

export function addLampaHandleClick(trafficDiv: ITraffic) {
  trafficDiv.appLampa();
}

export function delLampaHandleClick(trafficDiv: ITraffic) {
  trafficDiv.delLampa();
}

export function saveLampaHandleClick(trafficDiv: ITraffic) {
  const saveLamps = trafficDiv.lamps.map((item) => {
    return {
      idLampa: item.idLampa,
      backcolor: item.backcolor,
      timeInterval: item.timeInterval,
    } as ILampaMain;
  });
  saveLampsTraffic(saveLamps);
}

export function loadLampaHandleClick(trafficDiv: ITraffic) {
  const lampsLoad = loadLampsTraffic();
  trafficDiv.lamps = [];
  Array.from(lampsLoad).forEach((item: ILampa) => {
    trafficDiv.appLampaNew(
      new Lampa(item.idLampa, trafficDiv, item.backcolor, item.timeInterval)
    );
  });
}

let timerId: NodeJS.Timeout = null;

export function startLampaHandleClick(trafficDiv: ITraffic) {
  if (trafficDiv.lamps.length > 0) {
    trafficDiv.isTheadRun = !trafficDiv.isTheadRun;
    console.log(
      trafficDiv.isTheadRun
        ? `Включен ${new Date().toLocaleTimeString()}`
        : `\tВыключен ${new Date().toLocaleTimeString()}`
    );
    if (!trafficDiv.isTheadRun) {
      clearInterval(timerId);
    } else {
      timerId = setInterval(() => trafficDiv.switchLight(), Traffic.timeTact);
    }
  } else {
    trafficDiv.isTheadRun = false;
    console.log("В светофоре нет ламп !!!".toUpperCase());
  }
}
