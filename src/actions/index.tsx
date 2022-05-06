import { TrafficDiv } from "../controls/trafficDiv";

export function addLampaHandleClick(trafficDiv: any) {
  trafficDiv.appLampa();
}

export function delLampaHandleClick(trafficDiv: any) {
  trafficDiv.delLampa();
}

export function saveLampaHandleClick(event: any) {
  console.log(`saveLampaHandleClick`, event);
}

export function loadLampaHandleClick(event: any) {
  console.log(`loadLampaHandleClick`, event);
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
