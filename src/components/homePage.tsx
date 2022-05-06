import { getRootDiv } from "../lib/utils";
import { HeaderDiv } from "../controls/headerDiv";
import { BodyDiv } from "../controls/body";

export class HomePage {
  constructor() {
    const root = getRootDiv();

    root.append(HeaderDiv.inputElement());
    root.append(BodyDiv.inputElement());
  }
}
