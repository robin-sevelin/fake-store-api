import { OrderRow } from './orderRow';

export class Cart {
  constructor(public orderRow: OrderRow[], public totalPrice: number) {}
}
