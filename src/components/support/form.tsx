'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

export const FormSchema = z.object({
  symbol: z.string().min(5, {
    message: 'Symbol must be at least 5 characters.',
  }),
  period: z.string().min(2, {
    message: 'Period must be at least 2 characters.',
  }),
  limit: z.string().transform((val) => {
    const numberVal = Number(val);
    if (Number.isNaN(numberVal)) {
      throw new Error('Expected number, received a string');
    }
    return numberVal;
  }),
  window: z.string().transform((val) => {
    const numberVal = Number(val);
    if (Number.isNaN(numberVal)) {
      throw new Error('Expected number, received a string');
    }
    return numberVal;
  }),
});
export default function SearchForm({ handleSupportResistance }: { handleSupportResistance: any }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // @ts-ignore
      symbol: 'UMAUSDT',
      period: '15m',
      window: '4',
      limit: '300',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSupportResistance)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="symbol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Symbol</FormLabel>
              <FormControl>
                <Input placeholder="UMAUSDT" {...field} />
              </FormControl>
              <FormDescription>BTCUSDT/DOGEUSDT/UMAUSDT etc.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="period"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Period</FormLabel>
              <FormControl>
                <Input placeholder="Period 15m/4h etc" {...field} />
              </FormControl>
              <FormDescription>15m/30m/1h/4h/1d/1w/1M</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="window"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Window</FormLabel>
              <FormControl>
                <Input placeholder="Window" {...field} type="number" />
              </FormControl>
              <FormDescription>Window is ...</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="limit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Limit</FormLabel>
              <FormControl>
                <Input placeholder="limit" {...field} type="number" />
              </FormControl>
              <FormDescription>Limit is ...</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
