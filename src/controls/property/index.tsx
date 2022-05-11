import { Lampa } from "../lampa";
import { TrafficDiv } from "../trafficDiv";

export class PropertyDiv {
  el: HTMLDivElement;
  lampaCurrent: Lampa;

  constructor(lampa: Lampa) {
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

    if (TrafficDiv.isPause) {
      const labellightTime = document.createElement("label");
      labellightTime.textContent = "Пауза";
      this.el.append(labellightTime);
    }

    // const textllightColor = document.createElement("label");
    // textllightColor.textContent = Traffic.isPause ? "Пауза" : "";
    // lampsProperty.append(textllightColor);
  }
  get getElement() {
    return this.el;
  }
  static inputElement(lampa: Lampa) {
    return new PropertyDiv(lampa).getElement;
  }
}
