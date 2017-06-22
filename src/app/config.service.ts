import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class ConfigService{
  private pageTitle:string = '';
  private subject:Subject<String> = new Subject<String>();
  
  constructor(){
  }

  setPageTitle(title:string): void {
    if(this.pageTitle !== title) {
      this.pageTitle = title;
      this.subject.next(title); 
    }
  }

  getPageTitle(): Observable<any>{    
    return this.subject.asObservable();
  }
 
  
}