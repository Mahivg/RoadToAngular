import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[myLoop]",
})
export class MyLoopDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    for (var i = 0; i < 5; i++) {
      this.viewContainerRef.createEmbeddedView(templateRef);
    }
  }
}
