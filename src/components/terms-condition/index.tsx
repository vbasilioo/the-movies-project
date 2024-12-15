import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';

export function TermsAndConditionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hover:underline hover:text-white hover:font-bold dark:hover:text-primary">
          Terms & Conditions
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms & Conditions</DialogTitle>
          <DialogDescription>
            Read the terms and conditions to find out how we use our services.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
