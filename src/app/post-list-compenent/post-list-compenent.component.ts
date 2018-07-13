import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-compenent',
  templateUrl: './post-list-compenent.component.html',
  styleUrls: ['./post-list-compenent.component.scss']
})
export class PostListCompenentComponent implements OnInit {
@Input() postTitle: string;
@Input() postContent: string;
@Input() postLoves: number;
@Input() postCreated: Date;

  constructor() { }

  ngOnInit() {
  }
getpostLoves(){
    return this.getpostLoves();
}
}
