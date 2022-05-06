import { Lampa } from "../../controls/lampa";
import { TrafficDiv } from "../../controls/trafficDiv";

export function addLampaHandleClick(trafficDiv: any) {
  trafficDiv.appLampa();
}

export function delLampaHandleClick(trafficDiv: any) {
  trafficDiv.delLampa();
}

export function saveLampaHandleClick(trafficDiv: any) {
  localStorage.setItem("listLamps", JSON.stringify(trafficDiv.lamps));
  console.log(`saveLampaHandleClick`, trafficDiv);
}

export function loadLampaHandleClick(trafficDiv: any) {
  const lampsLoad = localStorage.getItem("listLamps");

  console.log("lampsLoad", lampsLoad);

  console.log("trafficDiv", trafficDiv);

  Array.from(lampsLoad).forEach((item) => {
    // console.log("item", item);
    // trafficDiv.lamps.appLampa(
    //   new Lampa(item.idlampa, item.backcolor, item.timeInterval)
    // );
  });

  // const lampsLoadMassiv = JSON.parse(lampsLoad);
  // console.log("lampsLoad parse", lampsLoadMassiv);
  // trafficDiv.cleanAll();

  // Array.from(lampsLoadMassiv).forEach((item) => {
  //   trafficDiv.loadLampa(item);
  // });
  // console.log(`loadLampaHandleClick`, trafficDiv);
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
    console.log("В свнтофоре нет ламп !!!".toUpperCase());
  }
}
