import { saveCurrentLamps } from "../../actions/localStr";
import { Lampa } from "../lampa";

export class TrafficDiv {
  static timeTact: number = 500;
  static timeStepMin: number = 1000;

  el: HTMLDivElement;
  public lamps: Lampa[] = [];
  public isTheadRun: boolean = false;
  static isPause: boolean = false;
  currentIndexLight: number;

  constructor() {
    this.el = document.createElement("div");
    this.el.className = "traffic-div";
    this.el.id = "traffic-div";
    this.currentIndexLight = 0;
  }

  get getElement() {
    return this.el;
  }
  static inputElement() {
    return new TrafficDiv().getElement;
  }

  public appLampa() {
    const lampa = new Lampa(this.lamps.length);

    this.lamps.push(lampa);
    this.reDraw();
  }

  public delLampa() {
    this.lamps.splice(this.lamps.length - 1, 1);
    this.reDraw();
  }

  public reDraw() {
    this.el.innerHTML = "";
    this.lamps.forEach((item) => {
      this.el.append(item.getElement);
    });
  }

  getTimeEnd(): number {
    let timeend = TrafficDiv.timeStepMin;
    const curLampa = JSON.parse(localStorage.getItem("curLampa"));

    if (curLampa) {
      timeend = curLampa.timeCur;
      this.currentIndexLight = curLampa.idLampa;
    } else {
      this.currentIndexLight = 0;
    }

    timeend = timeend - TrafficDiv.timeTact;

    return timeend;
  }

  public switchLight(): void {
    if (!TrafficDiv.isPause) {
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

        saveCurrentLamps(this.currentIndexLight, timeend);
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
}
