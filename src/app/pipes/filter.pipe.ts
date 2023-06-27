import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(transactionsArray: any[], searchTearm: string, searchType: string): any[] {
    const result : any = []
    if(!transactionsArray || searchTearm=='' || searchType==''){
      return transactionsArray 
    }
    else{
      transactionsArray.forEach(item=>{
        if(item[searchType].includes(searchTearm)){
          result.push(item)
        }
    
      })
    }

    return result 
  }

}
