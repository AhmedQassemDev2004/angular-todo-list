import { Injectable } from "@angular/core";
import { Observable,Subject } from "rxjs";

@Injectable()
export class EventService {
    private subject = new Subject();
    
    emit(eventName:string,payload:any) {
        this.subject.next({ eventName, payload });    
    }
    
    listen(eventName:string,callback: (event:any)=>void) {
        this.subject.asObservable().subscribe((next:any)=>{
            if(eventName === next.eventName) {
                callback(next.payload);
            }
        });
    }
}
