import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[myCustomDirective]",
})
export class MyCustomDirective {
  constructor(private elemRef: ElementRef, private renderer: Renderer2) {
    // this.elemRef.nativeElement.style.backgroundColor = "green";
    this.renderer.setStyle(
      this.elemRef.nativeElement,
      "backgroundColor",
      "green"
    );
  }
}
