import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from "@angular/core";
import { Ingredient } from "src/app/model/ingredient";

@Component({
  selector: "ht-shopping-detail",
  templateUrl: "./shopping-detail.component.html",
  styleUrls: ["./shopping-detail.component.css"],
})
export class ShoppingDetailComponent implements OnInit {
  @ViewChild("txtName", { static: true }) txtNameInput: ElementRef;
  @ViewChild("txtQuantity", { static: true }) txtQuantityInput: ElementRef;

  @Output() onAddIngredient = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  addIngredient() {
    const iName = this.txtNameInput.nativeElement.value;
    const iQuantity = this.txtQuantityInput.nativeElement.value;

    if (iName && iQuantity) {
      const newIngredient = new Ingredient(iName, iQuantity);

      this.onAddIngredient.emit(newIngredient);
    }
  }

  cancelEdit() {
    this.txtNameInput.nativeElement.value = "";
    this.txtQuantityInput.nativeElement.value = "";
  }
}
