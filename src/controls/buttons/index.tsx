import { ITraffic, IButtons, IActions } from "../../interfaces/index.d";

import { Button } from "../button";
import {
  // addLampaHandleClick,
  // delLampaHandleClick,
  // saveLampaHandleClick,
  // loadLampaHandleClick,
  // startLampaHandleClick,
  Actions,
} from "../../actions";
import { IButton } from "../../interfaces/index.d";

export class Buttons implements IButtons {
  el: HTMLDivElement;
  actions: IActions;

  actionBtn: IButton[] = [
    {
      title: "Добавить лампу",
      func: () => this.actions.addLampaHandleClick(this.trafficDiv),
    },
    {
      title: "Удалить лампу",
      func: () => this.actions.delLampaHandleClick(this.trafficDiv),
    },
    {
      title: "Сохранить",
      func: () => this.actions.saveLampaHandleClick(this.trafficDiv),
    },
    {
      title: "Загрузить",
      func: () => this.actions.loadLampaHandleClick(this.trafficDiv),
    },
    {
      title: "Старт/Стоп",
      func: () => this.actions.startLampaHandleClick(this.trafficDiv),
    },
  ];

  trafficDiv: ITraffic;

  constructor(trafficDiv: ITraffic) {
    this.trafficDiv = trafficDiv;
    this.el = document.createElement("div");
    this.el.className = "buttot-div";
    this.addButtons(this.actionBtn);
    this.actions = new Actions();
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
