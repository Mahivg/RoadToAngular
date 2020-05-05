import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from "@angular/core";
import { Ingredient } from "src/app/model/ingredient";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "ht-shopping-detail",
  templateUrl: "./shopping-detail.component.html",
  styleUrls: ["./shopping-detail.component.css"],
})
export class ShoppingDetailComponent implements OnInit {
  // @ViewChild("txtName", { static: true }) txtNameInput: ElementRef;
  // @ViewChild("txtQuantity", { static: true }) txtQuantityInput: ElementRef;

  @Output() onAddIngredient = new EventEmitter<Ingredient>();

  addIngredientFG: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addIngredientFG = this.fb.group({
      name: this.fb.control("", [Validators.required]),
      quantity: this.fb.control("", [Validators.required, Validators.min(1)]),
    });
  }

  addIngredient() {
    if (this.addIngredientFG.valid) {
      let newIngredient = this.addIngredientFG.value;
      this.onAddIngredient.emit(newIngredient);
    } else {
      alert("Invalid Inputs!!");
    }
  }

  cancelEdit() {
    this.addIngredientFG.reset();
  }
}
