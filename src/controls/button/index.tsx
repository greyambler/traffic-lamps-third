export class Button {
  el: HTMLButtonElement;

  constructor(text: string, handleClick: any) {
    this.el = document.createElement("button");
    this.el.addEventListener("click", handleClick);
    this.el.className = "button";
    this.el.textContent = text;
  }

  get getElement() {
    return this.el;
  }

  static inputElement(text: string, handleClick: any) {
    return new Button(text, handleClick).getElement;
  }
}
