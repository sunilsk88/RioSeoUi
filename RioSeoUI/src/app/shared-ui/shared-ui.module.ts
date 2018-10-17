import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DisplayFieldComponent } from "./display-field/display-field.component";
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  exports: [DisplayFieldComponent],
  declarations: [DisplayFieldComponent, ButtonComponent]
})
export class SharedUiModule {}
