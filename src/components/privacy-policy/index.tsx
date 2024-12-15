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

export function PrivacyPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hover:underline hover:text-white hover:font-bold dark:hover:text-primary">
          Privacy Policy
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            Read our privacy policy to learn how we use your data.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
