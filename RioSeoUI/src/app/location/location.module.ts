import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocationSummaryComponent } from "./location-summary/location-summary.component";

@NgModule({
  imports: [CommonModule],
  exports: [LocationSummaryComponent],
  declarations: [LocationSummaryComponent]
})
export class LocationModule {}
