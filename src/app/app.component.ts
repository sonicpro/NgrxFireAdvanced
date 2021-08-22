import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './models/app-state.model';
import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'ngrxFireAdvanced';

  post$: Observable<Post>;

  text!: string;

  /**
   *
   */
  constructor(private store: Store<AppState>) {
    this.post$ = this.store.select('post');
  }

  onEditText(){
    this.store.dispatch(PostActions.editText({ payload: this.text }));
  }

  onUpvote() {
    this.store.dispatch(PostActions.upvote());
  }

  onDownvote() {
    this.store.dispatch(PostActions.downvote());
  }

  onReset() {
    this.store.dispatch(PostActions.reset());
  }

  updateText($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.text = target.value;
  }
}
