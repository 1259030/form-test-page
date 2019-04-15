import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
@Directive({
  selector: 'input[capitalize]'
})
export class UppercaseDirective {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;

  @HostListener('input', ['$event']) onInputChange($event) {
    this.value =  $event.target.value.split(' ');
    for (var i=0, il=this.value.length; i<il; i++) {
        if (this.value[i].length > 0) {
            this.value[i] = this.value[i].charAt(0).toUpperCase()
                       + this.value[i].substring(1, this.value[i].length);
        }
    }
    this.value = this.value.join(' ');
    return $event.target.value = this.value;
    }
}