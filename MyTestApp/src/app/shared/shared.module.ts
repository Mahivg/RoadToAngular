import { NgModule } from "@angular/core";
import { LimitToPipe } from "./pipes/limitTo.pipe";
import { FilterPipe } from "./pipes/filter.pipe";

const declarations = [LimitToPipe, FilterPipe];

@NgModule({
  declarations: declarations,
  exports: declarations,
})
export class SharedModule {}
