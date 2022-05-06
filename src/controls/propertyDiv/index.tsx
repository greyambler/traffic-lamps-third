export class PropertyDiv {
  el: HTMLDivElement;

  constructor() {
    this.el = document.createElement("div");
    this.el.className = "property-div";
    this.el.innerHTML = "<h5>Св-во лампы</h5>";
  }
  get getElement() {
    return this.el;
  }
  static inputElement() {
    return new PropertyDiv().getElement;
  }
}
