import { getRootDiv } from "../../lib/utils";
import { HeaderDiv } from "../../controls/header";
import { BodyDiv } from "../../controls/main";

export class HomePage {
  constructor() {
    const root = getRootDiv();

    root.append(HeaderDiv.inputElement());
    root.append(BodyDiv.inputElement());
  }
}
