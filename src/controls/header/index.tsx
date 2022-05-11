import { IHeader } from "../../interfaces/index.d";

export class Header implements IHeader {
  el: HTMLDivElement;

  constructor() {
    this.el = document.createElement("div");
    this.el.className = "header-div";
    this.el.innerHTML = "<h1>Тест №3</h1>";
  }
  get getElement() {
    return this.el;
  }
  static inputElement() {
    return new Header().getElement;
  }
}
