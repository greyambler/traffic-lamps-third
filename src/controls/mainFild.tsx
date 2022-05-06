import { getButtotDiv, getRootDiv, getTrafficDiv } from "../lib/utils";
export class MainFild {
  buttonDiv;
  constructor() {
    this.buttonDiv = getButtotDiv();
    this.buttonDiv.append(
      this.addBtn("Добавить лампу", this.addLampaHandleClick)
    );
  }

  addBtn(text: string, funcEvent: any) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener("click", funcEvent);
    return btn;
  }

  addLampaHandleClick() {
    console.log(`addLampaHandleClick`);
    const div = getTrafficDiv();
    const elm = document.createElement("h4");
    elm.textContent = "Привет";
    div.append(elm);
  }

  delLampaHandleClick() {
    console.log(`delLampaHandleClick`);
  }
}
