
export interface Transaction {
  id: string;
  type: string;
  description: string;
  date: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  details?: {
    shares?: number;
    price?: number;
    fees?: number;
    source?: string;
  };
}
