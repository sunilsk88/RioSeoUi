import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePage } from "../Home/home-page/home-page";
import { EmployeeModule } from "../employee/employee.module";
import { LocationModule } from "../location/location.module";

@NgModule({
  imports: [CommonModule, EmployeeModule, LocationModule],
  declarations: [HomePage]
})
export class HomeModule {}
