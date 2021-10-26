import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  helloWorld() {
    console.log('-- Hello World');
  }
  autocompleteData = ['Papaléguas', 'Feijão', 'Arroz', 'Albatroz']
  contextMenuItems = [
    { text: 'Zoom In' },
    { text: 'Zoom Out' },
    {
      text: 'Share',
      items: [{
        text: 'Send to a friend',
        items: [
          { text: 'Log in with Facebook' },
          { text: 'Log in with Twitter' }
        ]
      }, {
        text: 'Send to a group',
        items: [
          { text: 'Log in with Facebook' },
          { text: 'Log in with Twitter' }
        ]
      }]
    },
    { text: 'Comment' }
  ];
}
