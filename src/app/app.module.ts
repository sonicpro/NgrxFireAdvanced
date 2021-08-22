import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Action, ActionReducer, StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppState } from './models/app-state.model';
import { postReducer } from './reducers/post.reducer';

const logger: (reducer: ActionReducer<any, Action>) => any = reducer => {
	return function newReducer(state: AppState, action: Action) {
		console.groupCollapsed(action.type);
		const nextState = reducer(state, action);
		console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
		console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
		console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
		console.groupEnd();
		return nextState;
	};
}

const metaReducers: MetaReducer<any>[] = [logger];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      post: postReducer
    }, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
