import { ButtonsDiv } from "../buttons";
import { TrafficDiv } from "../trafficDiv";
// import { PropertyDiv } from "../propertyDiv";

export class BodyDiv {
  el: HTMLDivElement;
  trafficDiv: TrafficDiv;
  buttonsDiv;
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "body-div";
    this.el.id = "body-div";

    this.trafficDiv = new TrafficDiv();
    // console.log(`appLampa`, this.trafficDiv);
    this.buttonsDiv = new ButtonsDiv(this.trafficDiv);

    this.addDiv();
  }
  get getElement() {
    return this.el;
  }
  static inputElement() {
    return new BodyDiv().getElement;
  }
  private addDiv() {
    this.el.append(this.buttonsDiv.getElement);
    this.el.append(this.trafficDiv.getElement);
    //this.el.append(PropertyDiv.inputElement());
  }
}
