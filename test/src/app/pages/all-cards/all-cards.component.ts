import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/interfaces/credit-card.interface';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {

  allCreditCard: Observable<CreditCard[]>;
  constructor(private service: PaymentService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.allCreditCard = this.service.getAllCards();
  }

}
