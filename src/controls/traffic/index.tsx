import { getItemCurLampa, saveCurrentLamps } from "../../database";
import { ILampa, ILampaMain, ITraffic } from "../../interfaces/index.d";
import { Lampa } from "../lampa";

export class Traffic implements ITraffic {
  static timeTact: number = 500;
  static timeStepMin: number = 1000;
  static isPause: boolean = false;

  el: HTMLDivElement;
  lamps: ILampa[] = [];
  isTheadRun: boolean = false;
  currentIndexLight: number;

  constructor() {
    this.el = document.createElement("div");
    this.el.className = "traffic-div";
    this.el.id = "traffic-div";
    this.currentIndexLight = 0;
  }

  static inputElement() {
    return new Traffic().getElement;
  }

  get getElement() {
    return this.el;
  }

  appLampa() {
    const lampa = new Lampa(this.lamps.length, this);
    this.appLampaNew(lampa);
  }

  appLampaNew(lampa: Lampa) {
    this.lamps.push(lampa);
    this.reDraw();
  }

  delLampa() {
    this.lamps.splice(this.lamps.length - 1, 1);
    this.reDraw();
  }

  reDraw() {
    this.el.innerHTML = "";
    this.lamps.forEach((item) => {
      this.el.append(item.getElement);
    });
  }

  getTimeEnd(): number {
    let timeend = Traffic.timeStepMin;
    const curLampa = getItemCurLampa();

    if (curLampa) {
      timeend = curLampa.timeInterval;
      this.currentIndexLight = curLampa.idLampa;
    } else {
      this.currentIndexLight = 0;
    }

    timeend = timeend - Traffic.timeTact;

    return timeend;
  }

  switchLight(): void {
    if (!Traffic.isPause) {
      if (this.lamps.length > 0) {
        let timeend = this.getTimeEnd();
        console.log("switchLight");
        console.log("timeend", timeend);
        if (timeend <= 0) {
          this.currentIndexLight++;
          this.currentIndexLight = this.currentIndexLight % this.lamps.length;

          if (this.lamps[this.currentIndexLight]) {
            timeend = this.lamps[this.currentIndexLight].timeInterval * 1000;
          }
        }

        saveCurrentLamps({
          idLampa: this.currentIndexLight,
          backcolor: this.lamps[this.currentIndexLight].backcolor,
          timeInterval: timeend,
        });
        this.turnOnLight(this.currentIndexLight);
      }
    }
  }

  turnOnLight(indexLampa: number): void {
    this.lamps.forEach((item, index) => {
      if (index === indexLampa) {
        item.divLampa.style.opacity = "1";
      } else {
        item.divLampa.style.opacity = "0.1";
      }
    });
  }

  onPauseTimer(cLampa: Lampa) {
    if (this.currentIndexLight === cLampa.idLampa && this.isTheadRun) {
      Traffic.isPause = !Traffic.isPause;
      // console.log(
      //   `onMouseover - ${Traffic.isPause ? "Pause" : "Start"} index = ${
      //     cLampa.idLampa
      //   }`
      // );
    }
  }
}
