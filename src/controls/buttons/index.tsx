import { ITraffic, IButtons } from "../../interfaces/index.d";

import { Button } from "../button";
import {
  addLampaHandleClick,
  delLampaHandleClick,
  saveLampaHandleClick,
  loadLampaHandleClick,
  startLampaHandleClick,
} from "../../actions";
import { IButton } from "../../interfaces/index.d";

export class Buttons implements IButtons {
  el: HTMLDivElement;

  actionBtn: IButton[] = [
    {
      title: "Добавить лампу",
      func: () => addLampaHandleClick(this.trafficDiv),
    },
    {
      title: "Удалить лампу",
      func: () => delLampaHandleClick(this.trafficDiv),
    },
    { title: "Сохранить", func: () => saveLampaHandleClick(this.trafficDiv) },
    { title: "Загрузить", func: () => loadLampaHandleClick(this.trafficDiv) },
    { title: "Старт/Стоп", func: () => startLampaHandleClick(this.trafficDiv) },
  ];

  trafficDiv: ITraffic;

  constructor(trafficDiv: ITraffic) {
    this.trafficDiv = trafficDiv;
    this.el = document.createElement("div");
    this.el.className = "buttot-div";
    this.addButtons(this.actionBtn);
  }

  get getElement() {
    return this.el;
  }

  private addButtons(actionBtn: IButton[]) {
    actionBtn.forEach((item) =>
      this.el.append(Button.inputElement(item.title, item.func))
    );
  }
}
