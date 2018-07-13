import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponentComponent } from './app-component/app-component.component';
import { PostListCompenentComponent } from './post-list-compenent/post-list-compenent.component';
import { PostListItemCompenentComponent } from './post-list-item-compenent/post-list-item-compenent.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentComponent,
    PostListCompenentComponent,
    PostListItemCompenentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
