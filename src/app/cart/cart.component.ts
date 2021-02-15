import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  loginForm: FormGroup;
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      usuario: new FormControl("", [Validators.required,Validators.minLength(5)]),
      password: new FormControl("", [])
    });
  }
}
