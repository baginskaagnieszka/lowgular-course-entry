import { NgModule } from '@angular/core';
import { FacesComponent } from './faces.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacesComponent],
  providers: [],
  exports: [FacesComponent]
})
export class FacesComponentModule {
}
