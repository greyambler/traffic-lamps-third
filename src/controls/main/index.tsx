import { IMain, ITraffic, IButtons } from "../../interfaces/index.d";
import { Buttons } from "../buttons";
import { Traffic } from "../traffic";

export class Main implements IMain {
  el: HTMLDivElement;
  traffic: ITraffic;
  buttons: IButtons;

  constructor() {
    this.el = document.createElement("div");
    this.el.className = "body-div";
    this.el.id = "body-div";

    this.traffic = new Traffic();
    this.buttons = new Buttons(this.traffic);

    this.addDiv();
  }

  static inputElement() {
    return new Main().getElement;
  }

  get getElement() {
    return this.el;
  }

  private addDiv() {
    this.el.append(this.buttons.getElement);
    this.el.append(this.traffic.getElement);
  }
}
