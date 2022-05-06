import { Lampa } from "../lampa";

export class TrafficDiv {
  el: HTMLDivElement;
  lamps: Lampa[] = [];

  constructor() {
    this.el = document.createElement("div");
    this.el.className = "traffic-div";
    this.el.id = "traffic-div";
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
}
