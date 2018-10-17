import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeSummaryComponent } from "../Employee/employee-summary/employee-summary.component";
import { SharedUiModule } from "../shared-ui/shared-ui.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  imports: [CommonModule, SharedUiModule, SharedComponentsModule],
  exports: [EmployeeSummaryComponent],
  declarations: [EmployeeSummaryComponent, EmployeesListComponent]
})
export class EmployeeModule {}
