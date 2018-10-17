import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocationSummaryComponent } from "./location-summary/location-summary.component";
import { SharedUiModule } from "../shared-ui/shared-ui.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";

@NgModule({
  imports: [CommonModule, SharedUiModule, SharedComponentsModule],
  exports: [LocationSummaryComponent],
  declarations: [LocationSummaryComponent]
})
export class LocationModule {}
