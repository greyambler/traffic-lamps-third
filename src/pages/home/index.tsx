import { getRootDiv } from "../../lib/utils";
import { Header } from "../../controls/header";
import { Main } from "../../controls/main";

export class HomePage {
  constructor() {
    const root = getRootDiv();

    root.append(Header.inputElement());
    root.append(Main.inputElement());
  }
}
