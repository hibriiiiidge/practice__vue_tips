import { BaseFormItem } from '@/lib';

export class NameFormItem extends BaseFormItem {
  constructor(value="") {
    super(value);
    this._addValidators();
  }

  _addValidators() {
    this.addValidator({
      message: "入力必須です",
      validator: this._hasValue
    });

    this.addValidator({
      message: "16文字以上",
      validator: this._expectLength
    });
  }

  _hasValue(value) {
    return String(value).length > 0;
  }

  _expectLength(value) {
    return String(value).length <= 16;
  }
}
