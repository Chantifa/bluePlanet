import {Component} from '@angular/core';
import {FloatLabelType} from '@angular/material/form-field';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'mobility',
  templateUrl: './mobility.component.html',
})
export class MobilityComponent {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
