import {Component, Input, OnInit} from '@angular/core';
import {post} from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-item-compenent',
  templateUrl: './post-list-item-compenent.component.html',
  styleUrls: ['./post-list-item-compenent.component.scss']
})
export class PostListItemCompenentComponent implements OnInit {
  @Input() postLoves: number;
  constructor() { }

  ngOnInit() {
  }

}
