
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { Transaction } from '@/types/Transaction';

interface TransactionDetailModalProps {
  transaction: Transaction | null;
  isOpen: boolean;
  onClose: () => void;
}

const TransactionDetailModal: React.FC<TransactionDetailModalProps> = ({
  transaction,
  isOpen,
  onClose
}) => {
  const isMobile = useIsMobile();

  if (!transaction) return null;

  const TransactionDetails = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Type</p>
          <p className="font-medium">{transaction.type}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Amount</p>
          <p className="font-medium">${transaction.amount.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Date</p>
          <p className="font-medium">{transaction.date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className={`font-medium ${transaction.status === 'Completed' ? 'text-green-500' : transaction.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
            {transaction.status}
          </p>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <p className="text-sm text-gray-500 mb-2">Transaction Details</p>
        
        {transaction.details?.shares && (
          <div className="flex justify-between py-1">
            <span>Shares</span>
            <span className="font-medium">{transaction.details.shares}</span>
          </div>
        )}
        
        {transaction.details?.price && (
          <div className="flex justify-between py-1">
            <span>Price per Share</span>
            <span className="font-medium">${transaction.details.price.toFixed(2)}</span>
          </div>
        )}
        
        {transaction.details?.fees !== undefined && (
          <div className="flex justify-between py-1">
            <span>Fees</span>
            <span className="font-medium">${transaction.details.fees.toFixed(2)}</span>
          </div>
        )}
        
        {transaction.details?.source && (
          <div className="flex justify-between py-1">
            <span>Source/Destination</span>
            <span className="font-medium">{transaction.details.source}</span>
          </div>
        )}
        
        <div className="flex justify-between py-1 border-t mt-2">
          <span className="font-medium">Total</span>
          <span className="font-bold">${transaction.amount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">{transaction.description}</h3>
              <span className={`px-2 py-1 rounded text-xs ${
                transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {transaction.status}
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-medium">{transaction.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-medium">${transaction.amount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{transaction.date}</p>
                </div>
              </div>
              
              <Collapsible className="w-full">
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 border-t">
                  <span className="font-medium">Transaction Details</span>
                  <span className="text-sm text-blue-600">View</span>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="pt-2 space-y-2">
                  {transaction.details?.shares && (
                    <div className="flex justify-between py-1">
                      <span>Shares</span>
                      <span className="font-medium">{transaction.details.shares}</span>
                    </div>
                  )}
                  
                  {transaction.details?.price && (
                    <div className="flex justify-between py-1">
                      <span>Price per Share</span>
                      <span className="font-medium">${transaction.details.price.toFixed(2)}</span>
                    </div>
                  )}
                  
                  {transaction.details?.fees !== undefined && (
                    <div className="flex justify-between py-1">
                      <span>Fees</span>
                      <span className="font-medium">${transaction.details.fees.toFixed(2)}</span>
                    </div>
                  )}
                  
                  {transaction.details?.source && (
                    <div className="flex justify-between py-1">
                      <span>Source/Destination</span>
                      <span className="font-medium">{transaction.details.source}</span>
                    </div>
                  )}
                </CollapsibleContent>
              </Collapsible>
            </div>
            
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Transaction Details</DialogTitle>
          <DialogDescription>
            {transaction.description} - {transaction.date}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <TransactionDetails />
        </div>
        
        <div className="mt-6 flex justify-end">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDetailModal;
