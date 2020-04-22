import {
  Component,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "my-products",
  templateUrl: "./products.component.html",
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  product: any;

  @ViewChild("div1", { static: true }) div1: ElementRef;

  @ViewChild("form1", { static: true }) form1: NgForm;

  constructor() {}

  myVal: boolean;

  productChanged(event) {
    console.log("parent event");
    console.log(event);
    this.product = event;
  }

  ngOnInit(): void {
    this.product = { name: "My Product 1", description: "My Test Description" };
    console.log(" ngOnInit : Called ... ");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(" ngOnChanges : Called ... ");
  }

  ngDoCheck(): void {
    console.log(" ngDoCheck : Called ... ");
  }

  ngAfterContentInit(): void {
    console.log(" ngAfterContentInit : Called ... ");
  }

  ngAfterContentChecked(): void {
    console.log(" ngAfterContentChecked : Called ... ");
  }

  ngAfterViewInit(): void {
    console.log(" ngAfterViewInit : Called ... ");
  }

  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked : Called ... ");
  }

  ngOnDestroy(): void {
    console.log(" ngOnDestory : Called ... ");
  }
}
