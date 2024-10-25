import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { tCreateTransaction } from '../../../interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss',
})
export class TransactionFormComponent {
  constructor(private transactionService: TransactionService) {}

  amount = new FormControl<number>(0);
  type = new FormControl<'deposit' | 'withdraw'>('deposit');
  description = new FormControl<string>('');

  formSubmit(event: Event) {
    event.preventDefault();
    let formData = {
      amount: this.amount.value,
      type: this.type.value,
      description: this.description.value,
    };

    this.transactionService.addTransaction(formData as tCreateTransaction);

    this.amount.setValue(0);
    this.type.setValue('deposit');
    this.description.setValue('');
  }
}
