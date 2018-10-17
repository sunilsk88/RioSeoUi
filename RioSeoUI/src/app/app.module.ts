import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomePage } from "./Home/home-page/home-page";
import { HomeModule } from "./home/home.module";
import { EmployeeModule } from "./employee/employee.module";

const appRoutes: Routes = [{ path: "home", component: HomePage }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    EmployeeModule,
    RouterModule.forRoot(appRoutes) // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
