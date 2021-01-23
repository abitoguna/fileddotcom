import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCard } from '../../interfaces/credit-card.interface';
import { PaymentService } from '../../services/payment.service';
import { ToastrService } from 'ngx-toastr';
import { ExpiryDateValidator } from '../../validators/expiry-date.validator';
import { SecurityCodeValidator } from '../../validators/security-code.validator';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {

  newCardForm: FormGroup;
  constructor(private fb: FormBuilder, private paymentService: PaymentService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formInit();
  }


  formInit() {
    this.newCardForm = this.fb.group({
      creditCardNumber: new FormControl('', [Validators.required]),
      cardHolder: new FormControl('', [Validators.required]),
      exirationDate: new FormControl('', [Validators.required, ExpiryDateValidator.mustBeGreaterThanToday]),
      securityCode: new FormControl('', [SecurityCodeValidator.mustBeThreeDigits]),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  sendPayment() {
    let data: CreditCard = this.newCardForm.value;
    // Send to service
    this.paymentService.makePayment(data).subscribe(res => {
      this.toastr.success('Card saved.');
      this.newCardForm.reset();
      this.formInit();
    }, err => {
      this.toastr.error('Something went wrong. Please try again.');
    })
  }

  get form(){
    return this.newCardForm.controls;
  }
}
