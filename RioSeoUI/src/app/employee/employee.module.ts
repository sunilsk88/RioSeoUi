import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeSummaryComponent } from "../Employee/employee-summary/employee-summary.component";
import { SharedUiModule } from "../shared-ui/shared-ui.module";

@NgModule({
  imports: [CommonModule, SharedUiModule],
  exports: [EmployeeSummaryComponent],
  declarations: [EmployeeSummaryComponent]
})
export class EmployeeModule {}
