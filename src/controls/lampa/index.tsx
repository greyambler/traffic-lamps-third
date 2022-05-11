import { ILampa, ITraffic } from "../../interfaces/index.d";
import { Property } from "../property";
import { Traffic } from "../traffic";

export class Lampa implements ILampa{
  idLampa: number;
  backcolor: string;
  timeInterval: number;
  traffic: ITraffic;

  el: HTMLDivElement;
  divBase: HTMLDivElement;
  divLampa: HTMLDivElement;

  constructor(
    idlampa: number,
    traffic: ITraffic,
    backcolor?: string,
    timeInterval?: number
  ) {
    this.traffic = traffic;
    this.idLampa = idlampa;
    this.timeInterval = timeInterval ? timeInterval : 1;
    this.backcolor = backcolor ? backcolor : this.getColorNoStart(idlampa);

    this.creatDivBase();
    this.creatDivLight();
    this.divBase.appendChild(this.divLampa);
  }

  get getElement() {
    return this.divBase;
  }

  static inputElement(idlampa: number, onPauseTimer: any) {
    return new Lampa(idlampa, onPauseTimer).getElement;
  }

  creatDivBase(): void {
    this.divBase = document.createElement("div");
    this.divBase.className = "all_light";
    this.divBase.id = "all_light" + this.idLampa.toString();
  }

  creatDivLight() {
    this.divLampa = document.createElement("div");
    this.divLampa.className = "lampa-light";
    this.divLampa.id = "lampa-light" + this.idLampa;
    this.divLampa.style.background = this.backcolor;
    this.divLampa?.addEventListener("click", () => this.showProperty());
    this.divLampa?.addEventListener("mouseover", () => this.onMouseover());
  }

  getColorNoStart(index: number): string {
    const indexColor = index % 3;
    let color = "green";
    switch (indexColor) {
      case 0: {
        color = "#00ff00";
        break;
      }
      case 1: {
        color = "#ffff00";
        break;
      }
      case 2: {
        color = "#ff0000";
        break;
      }
      default: {
        color = "#00ff00";
        break;
      }
    }
    return color;
  }

  showProperty() {
    const el_old = document.getElementsByClassName("property-div");
    if (el_old) Array.from(el_old).forEach((item) => item.remove());
    const el = document.getElementById("body-div");
    el.append(Property.inputElement(this));
  }

  updateFirst(event: Event) {
    const colorIn = (event.target as HTMLInputElement).value;
    this.backcolor = colorIn;
    this.divLampa.style.background = colorIn;
  }

  updateTime(event: Event) {
    try {
      const colorIn = (event.target as HTMLInputElement).value;
      this.timeInterval = parseInt(colorIn);
    } catch (error) {}
  }

  onMouseover() {
    this.traffic.onPauseTimer(this);
    this.showProperty();
  }
}
