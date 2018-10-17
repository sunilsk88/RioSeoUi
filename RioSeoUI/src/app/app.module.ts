import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomePage } from "./Home/home-page/home-page";
import { HomeModule } from "./home/home.module";
import { EmployeeModule } from "./employee/employee.module";
import { EmployeeSummaryComponent } from "./Employee/employee-summary/employee-summary.component";
import { LocationSummaryComponent } from "./location/location-summary/location-summary.component";
import { LocationModule } from "./location/location.module";
import { EmployeesListComponent } from "./employee/employees-list/employees-list.component";

const appRoutes: Routes = [
  { path: "home", component: HomePage },
  { path: "employeeSummary", component: EmployeeSummaryComponent },
  { path: "location", component: LocationSummaryComponent },
  { path: "employeeList", component: EmployeesListComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    EmployeeModule,
    LocationModule,
    RouterModule.forRoot(appRoutes) // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
