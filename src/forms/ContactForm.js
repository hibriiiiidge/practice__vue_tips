import { BaseForm } from "@/lib";
import { NameFormItem } from "./items";

export class ContactForm extends BaseForm {
  constructor({ name="" }) {
    super();
    this.addItem("name", new NameFormItem(name));
  }

  buildRequestBody() {
    return {
      contact: {
        ...this.values()
      }
    }
  }
}
