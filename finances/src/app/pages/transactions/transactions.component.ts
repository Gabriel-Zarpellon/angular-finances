import { Component } from '@angular/core';
import { TransactionFormComponent } from '../../components/forms/transaction-form/transaction-form.component';
import { RouterLink } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { TransactionCardComponent } from '../../components/transaction-card/transaction-card.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    RouterLink,
    TransactionFormComponent,
    TransactionCardComponent,
    CommonModule,
  ],
  providers: [TransactionService],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  constructor(private transactionService: TransactionService) {}

  get totalAmount() {
    return this.transactionService.getTotalAmount();
  }

  get transactionList() {
    return this.transactionService.getTransactionList();
  }
}
