import { Pipe } from "@angular/core";

@Pipe({
  name: "bytOrderBy"
})
export class BYTOrderByPipe {
  transform(value) {
     value.sort(function(a, b){
       return b.total - a.total;
     });
    return value;
  }
}

@Pipe({
  name: "bytOrderByDate"
})
export class BYTOrderByDatePipe {
  transform(value) {
     value.sort(function(a: any, b: any){
       return new Date(b.date) - new Date(a.date);
     });
    return value;
  }
}