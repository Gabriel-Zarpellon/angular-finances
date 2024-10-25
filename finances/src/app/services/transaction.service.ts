import { Injectable, signal, computed } from '@angular/core';
import {
  iTransaction,
  tCreateTransaction,
} from '../interfaces/transaction.interface';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  readonly transactionList = signal<iTransaction[]>([]);
  readonly totalAmount = computed(() =>
    this.transactionList().reduce((total, transaction) => {
      if (transaction.type == 'deposit') {
        return total + transaction.amount;
      }
      return total - transaction.amount;
    }, 0)
  );

  getTransactionList() {
    return this.transactionList();
  }

  addTransaction(formData: tCreateTransaction) {
    const newTransaction = {
      ...formData,
      id: crypto.randomUUID(),
    };

    this.transactionList.update((transactionList) => [
      ...transactionList,
      newTransaction,
    ]);
  }

  deleteTransaction(id: string) {
    this.transactionList.update((transactionList) =>
      transactionList.filter((transaction) => transaction.id != id)
    );
  }

  getTotalAmount() {
    return this.totalAmount();
  }
}
