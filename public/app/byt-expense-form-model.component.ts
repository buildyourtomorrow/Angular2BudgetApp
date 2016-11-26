export class BYTExpenseFormModel {
  constructor(
  	public id: number,
  	public description: string,
    public date: Date,
    public category: string,
    public subCategory: string,
    public amount: number
  ) {  }
}