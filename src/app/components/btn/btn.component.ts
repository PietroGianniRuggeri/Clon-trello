import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn:  'button' | 'reset' |'submit' = 'button';
  @Input() color: 'success' | 'warning' | 'danger' | 'primary' | 'light' | 'sky' = 'primary';

  mapColors = {
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
      'text-white': true
    },
    warning: {
      'bg-warning-700': true,
      'hover:bg-warning-800': true,
      'focus:ring-warning-300': true,
      'text-white': true    
    },
    danger: {
      'bg-danger-700': true,
      'hover:bg-danger-800': true,
      'focus:ring-danger-300': true,
      'text-white': true 
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true
    },
    sky: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true
    },
    light: {
      'bg-gray-700': true,
      'hover:bg-gray-800': true,
      'focus:ring-gray-300': true,
      'text-gray-800': true
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

  get colors() {    
     const colors = this.mapColors[this.color];
     if (colors) {
      return colors;
     }
     return {};
    
  }

}
