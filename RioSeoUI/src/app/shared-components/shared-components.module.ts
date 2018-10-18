import { AgGridModule } from 'ag-grid-angular';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [CommonModule,AgGridModule.withComponents([])],
  exports: [HeaderComponent, GridComponent],
  declarations: [HeaderComponent, GridComponent]
})
export class SharedComponentsModule {}



