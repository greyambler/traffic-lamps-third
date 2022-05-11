import { Lampa } from "../controls/lampa";
import { Traffic } from "../controls/traffic";
import { DataBaseLocal } from "../database";
import { ILampa, ILampaMain, ITraffic, IActions } from "../interfaces/index.d";

export class Actions implements IActions {
  timerId: NodeJS.Timeout = null;

  addLampaHandleClick(trafficDiv: ITraffic) {
    trafficDiv.appLampa();
  }

  delLampaHandleClick(trafficDiv: ITraffic) {
    trafficDiv.delLampa();
  }

  saveLampaHandleClick(trafficDiv: ITraffic) {
    const saveLamps = trafficDiv.lamps.map((item) => {
      return {
        idLampa: item.idLampa,
        backcolor: item.backcolor,
        timeInterval: item.timeInterval,
      } as ILampaMain;
    });
    new DataBaseLocal().saveLampsTraffic(saveLamps);
  }

  loadLampaHandleClick(trafficDiv: ITraffic) {
    const lampsLoad = new DataBaseLocal().loadLampsTraffic();
    trafficDiv.lamps = [];
    Array.from(lampsLoad).forEach((item: ILampa) => {
      trafficDiv.appLampaNew(
        new Lampa(item.idLampa, trafficDiv, item.backcolor, item.timeInterval)
      );
    });
  }

  startLampaHandleClick(trafficDiv: ITraffic) {
    if (trafficDiv.lamps.length > 0) {
      trafficDiv.isTheadRun = !trafficDiv.isTheadRun;
      console.log(
        trafficDiv.isTheadRun
          ? `Включен ${new Date().toLocaleTimeString()}`
          : `\tВыключен ${new Date().toLocaleTimeString()}`
      );
      if (!trafficDiv.isTheadRun) {
        clearInterval(this.timerId);
      } else {
        this.timerId = setInterval(
          () => trafficDiv.switchLight(),
          Traffic.timeTact
        );
      }
    } else {
      trafficDiv.isTheadRun = false;
      console.log("В светофоре нет ламп !!!".toUpperCase());
    }
  }
}
