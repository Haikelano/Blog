import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MY Post page';
  posts = [
    {
      title: 'Mon Premier post',
      content: 'This documentation assumes that you are already familiar with JavaScript,and' +
      'some of the tools from the latest standards such as classes and modules.The code samples are written using TypeScript.' +
      'Most Angular code can be written with just the latest JavaScript' ,
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'This documentation assumes that you are already familiar with JavaScript,and' +
      'some of the tools from the latest standards such as classes and modules.The code samples are written using TypeScript.' +
      'Most Angular code can be written with just the latest JavaScript' ,
      loveIts: 0,
      created_at: new Date()
    },
    {
     title: 'Mon Dernier post',
      content: 'This documentation assumes that you are already familiar with JavaScript,and' +
      'some of the tools from the latest standards such as classes and modules.The code samples are written using TypeScript.' +
      'Most Angular code can be written with just the latest JavaScript' ,
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
