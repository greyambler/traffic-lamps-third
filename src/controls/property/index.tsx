import { ILampa, IProperty } from "../../interfaces/index.d";
import { Lampa } from "../lampa";
import { Traffic } from "../traffic";

export class Property implements IProperty {
  el: HTMLDivElement;
  lampaCurrent: ILampa;

  constructor(lampa: ILampa) {
    this.lampaCurrent = lampa;
    this.el = document.createElement("div");
    this.el.className = "property-div";
    this.el.innerHTML = "<h5>Св-во лампы</h5>";

    const labellightColor = document.createElement("label");
    labellightColor.textContent = "Цвет";
    this.el.append(labellightColor);

    const lightColor = document.createElement("input");
    lightColor.type = "color";
    lightColor.value = this.lampaCurrent.backcolor;
    lightColor.addEventListener("input", () =>
      this.lampaCurrent.updateFirst(event)
    );
    this.el.append(lightColor);

    const labellightTime = document.createElement("label");
    labellightTime.textContent = "Время работы";
    this.el.append(labellightTime);

    const timeLight = document.createElement("input");
    timeLight.type = "number";
    timeLight.value = this.lampaCurrent.timeInterval.toString();
    timeLight.addEventListener("input", () =>
      this.lampaCurrent.updateTime(event)
    );

    this.el.append(timeLight);

    if (Traffic.isPause) {
      const labellightTime = document.createElement("label");
      labellightTime.textContent = "Пауза";
      this.el.append(labellightTime);
    }
  }

  static inputElement(lampa: Lampa) {
    return new Property(lampa).getElement;
  }

  get getElement() {
    return this.el;
  }
}
