import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn:  'button' | 'reset' |'submit' = 'button';
  @Input() color: string = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  get colors() {
    /* return `bg-${this.color}-700 hover:bg-${this.color}-800 focus:ring-${this.color}-300`; */
    return{
      'text-white': this.color === 'success' || this.color === 'warning' || this.color === 'danger' || this.color === 'primary',
      'text-gray-800': this.color === 'gray-light',
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-warning-700': this.color === 'warning',
      'hover:bg-warning-800': this.color === 'warning',
      'focus:ring-warning-300': this.color === 'warning',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-danger-700': this.color === 'danger',
      'hover:bg-danger-800': this.color === 'danger',
      'focus:ring-danger-300': this.color === 'danger',
      'bg-gray-200': this.color === 'gray-light',
      'hover:bg-gray-500': this.color === 'gray-light',
      'focus:ring-danger-50': this.color === 'gray-light',
    }
  }

}
