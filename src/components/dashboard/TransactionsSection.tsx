
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { X, Info } from 'lucide-react';
import { Transaction } from '@/types/Transaction';

interface TransactionsSectionProps {
  transactions: Transaction[];
  showAllTransactions: boolean;
  onShowAllTransactions: () => void;
  onHideAllTransactions: () => void;
  onTransactionClick: (transaction: Transaction) => void;
}

const TransactionsSection: React.FC<TransactionsSectionProps> = ({
  transactions,
  showAllTransactions,
  onShowAllTransactions,
  onHideAllTransactions,
  onTransactionClick
}) => {
  if (showAllTransactions) {
    return (
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <CardTitle className="text-lg">All Transactions</CardTitle>
          <Button 
            variant="outline" 
            size="sm"
            onClick={onHideAllTransactions}
          >
            <X className="h-4 w-4 mr-1" /> Close
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow 
                  key={transaction.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => onTransactionClick(transaction)}
                >
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                      transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.slice(0, 3).map((transaction) => (
            <div 
              key={transaction.id} 
              className="flex justify-between items-center pb-2 border-b cursor-pointer hover:bg-gray-50 rounded p-1"
              onClick={() => onTransactionClick(transaction)}
            >
              <div>
                <div className="font-medium">{transaction.description}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
              <div className="font-medium text-right">
                <div>${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <div className={`text-sm ${transaction.status === 'Completed' ? 'text-green-500' : transaction.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                  {transaction.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsSection;
