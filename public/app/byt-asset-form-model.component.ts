export class BYTAssetFormModel {
  constructor(
  	public id: number,
  	public description: string,
    public date: Date,
    public category: string,
    public amount: number,
  ) {  }
}