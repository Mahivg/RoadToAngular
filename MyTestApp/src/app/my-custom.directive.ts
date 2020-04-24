import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[myCustomDirective]",
})
export class MyCustomDirective {
  @HostBinding("style.backgroundColor")
  hostBackgroundColor = "red";

  first: number;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {
    // this.elemRef.nativeElement.style.backgroundColor = "green";
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   "backgroundColor",
    //   "green"
    // );
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.renderer.setStyle(
      this.elemRef.nativeElement,
      "backgroundColor",
      "yellow"
    );
    this.hostBackgroundColor = "yellow";
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   "backgroundColor",
    //   "green"
    // );
    this.hostBackgroundColor = "green";
  }
}
