import { Component } from '@angular/core';
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-test',
  imports: [RouterModule ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  constructor() {
    // Changing does not trigger the page reload
    console.log('Test Component');
  }
}
