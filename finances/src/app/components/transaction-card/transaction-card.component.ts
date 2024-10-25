import { Component, Input } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { iTransaction } from '../../interfaces/transaction.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.scss',
})
export class TransactionCardComponent {
  constructor(private transactionService: TransactionService) {}

  @Input() transaction!: iTransaction;

  handleClick() {
    this.transactionService.deleteTransaction(this.transaction.id);
  }
}
