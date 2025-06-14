
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose
} from '@/components/ui/drawer';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

const formSchema = z.object({
  amount: z.coerce.number().positive({ message: "Amount must be positive." }).min(1, { message: "Minimum deposit is $1." }),
});

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDeposit: (amount: number) => void;
}

const DepositModal: React.FC<DepositModalProps> = ({ isOpen, onClose, onDeposit }) => {
  const isMobile = useIsMobile();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onDeposit(values.amount);
    form.reset();
  }
  
  const handleClose = () => {
    onClose();
    form.reset();
  }

  const ModalContent = (
    <>
      <DialogHeader>
        <DialogTitle>Make a Deposit</DialogTitle>
        <DialogDescription>
          Enter the amount to deposit into your portfolio. This is a simulation.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount ($)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g. 1000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline" onClick={handleClose}>Cancel</Button>
            </DialogClose>
            <Button type="submit">Deposit</Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
  
  const DrawerContentComponent = (
     <div className="p-4">
        <DrawerHeader className="px-0">
            <DrawerTitle>Make a Deposit</DrawerTitle>
            <DrawerDescription>
              Enter the amount to deposit into your portfolio. This is a simulation.
            </DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                  <FormItem>
                      <FormLabel>Amount ($)</FormLabel>
                      <FormControl>
                      <Input type="number" placeholder="e.g. 1000" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                  )}
              />
              <DrawerFooter className="px-0">
                  <Button type="submit">Deposit</Button>
                  <DrawerClose asChild>
                    <Button type="button" variant="outline" onClick={handleClose}>Cancel</Button>
                  </DrawerClose>
              </DrawerFooter>
            </form>
        </Form>
      </div>
  )

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DrawerContent>
            {DrawerContentComponent}
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent>
        {ModalContent}
      </DialogContent>
    </Dialog>
  );
};

export default DepositModal;
