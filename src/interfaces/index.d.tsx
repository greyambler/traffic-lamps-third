import { DataBaseLocal } from "../database";

export interface IButton {
  el?: HTMLButtonElement;
  getElement?: HTMLButtonElement;
  title: string;
  func: any;
}

export interface IButtons {
  el: HTMLDivElement;

  getElement: HTMLDivElement;
}
export interface IHeader {
  el: HTMLDivElement;

  getElement: HTMLDivElement;
}

export interface ILampaMain {
  idLampa: number;
  backcolor: string;
  timeInterval: number;
}
export interface ILampa extends ILampaMain {
  el: HTMLDivElement;
  divBase: HTMLDivElement;
  divLampa: HTMLDivElement;

  traffic: ITraffic;

  getElement: HTMLDivElement;

  creatDivBase: () => void;
  creatDivLight: () => void;
  getColorNoStart: (index: number) => string;
  showProperty: () => void;
  updateFirst: (event: Event) => void;
  updateTime: (event: Event) => void;
  onMouseover: () => void;
}

export interface ITraffic {
  el: HTMLDivElement;
  lamps: ILampa[];
  isTheadRun: boolean;
  currentIndexLight: number;
  dataBaseLocal: DataBaseLocal;
  getElement: HTMLDivElement;

  appLampa: () => void;
  appLampaNew: (lampa: ILampa) => void;
  delLampa: () => void;
  reDraw: () => void;
  getTimeEnd: () => number;
  switchLight: () => void;
  turnOnLight: (indexLampa: number) => void;
  onPauseTimer: (cLampa: ILampa) => void;
}

export interface IProperty {
  el: HTMLDivElement;
  lampaCurrent: ILampa;

  getElement: HTMLDivElement;
}

export interface IMain {
  el: HTMLDivElement;
  traffic: ITraffic;
  buttons: IButtons;
  getElement: HTMLDivElement;
}

export interface IDataBaseLocal {
  saveCurrentLamps: (curLampa: ILampaMain) => void;
  saveLampsTraffic: (lampsTraffic: ILampaMain[]) => void;
  loadLampsTraffic: () => ILampaMain[];
  getItemCurLampa: () => ILampaMain;
}

export interface IActions {
  timerId: NodeJS.Timeout;
  addLampaHandleClick: (trafficDiv: ITraffic) => void;
  delLampaHandleClick: (trafficDiv: ITraffic) => void;
  saveLampaHandleClick: (trafficDiv: ITraffic) => void;
  loadLampaHandleClick: (trafficDiv: ITraffic) => void;
  startLampaHandleClick: (trafficDiv: ITraffic) => void;
}
