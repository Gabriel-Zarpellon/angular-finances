export interface iTransaction {
  id: string;
  amount: number;
  type: string;
  description: string;
}

export type tCreateTransaction = Omit<iTransaction, 'id'>;
