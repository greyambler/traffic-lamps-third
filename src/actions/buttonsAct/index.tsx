import { Lampa } from "../../controls/lampa";
import { TrafficDiv } from "../../controls/trafficDiv";

export function addLampaHandleClick(trafficDiv: any) {
  trafficDiv.appLampa();
}

export function delLampaHandleClick(trafficDiv: any) {
  trafficDiv.delLampa();
}

export function saveLampaHandleClick(trafficDiv: any) {
  // console.log(`saveLampaHandleClick`, JSON.stringify(trafficDiv.lamps));
  localStorage.setItem("listLamps", JSON.stringify(trafficDiv.lamps));
}

export function loadLampaHandleClick(trafficDiv: any) {
  const lampsLoad = JSON.parse(localStorage.getItem("listLamps"));
  trafficDiv.lamps = []
  Array.from(lampsLoad).forEach((item: Lampa) => {
    console.log("item", item);
    trafficDiv.appLampaNew(new Lampa(item.idLampa, item.backcolor, item.timeInterval))
  });
}

let timerId: NodeJS.Timeout = null;

export function startLampaHandleClick(trafficDiv: any) {
  // console.log(`startLampaHandleClick`, trafficDiv);

  if (trafficDiv.lamps.length > 0) {
    trafficDiv.isTheadRun = !trafficDiv.isTheadRun;
    console.log(
      trafficDiv.isTheadRun
        ? `Включен ${new Date().toLocaleTimeString()}`
        : `\tВыключен ${new Date().toLocaleTimeString()}`
    );
    if (!trafficDiv.isTheadRun) {
      clearInterval(timerId);

      // if (lampsProperty) {
      //   lampsProperty.innerHTML = "";
      // }
    } else {
      timerId = setInterval(
        () => trafficDiv.switchLight(),
        TrafficDiv.timeTact
      );
    }
  } else {
    trafficDiv.isTheadRun = false;
    console.log("В светофоре нет ламп !!!".toUpperCase());
  }
}
