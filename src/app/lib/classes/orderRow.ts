export class OrderRow {
  constructor(
    public title: string,
    public price: number,
    public amount: number,
    public rowTotalPrice: number
  ) {}
}
