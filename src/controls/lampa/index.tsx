export class Lampa {
  el: HTMLDivElement;
  public idLampa: number;
  public backcolor: string;
  public timeInterval: number;

  public divBase: HTMLDivElement;
  public divLampa: HTMLDivElement;

  constructor(idlampa: number, backcolor?: string, timeInterval?: number) {
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
  static inputElement(idlampa: number) {
    return new Lampa(idlampa).getElement;
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
    // this.divLampa?.addEventListener("click", () => this.showProperty());

    // this.divLampa?.addEventListener("mouseover", () => this.onMouseover());
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
}
