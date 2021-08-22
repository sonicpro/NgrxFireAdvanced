import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

const defaultState: Post = {
    text: 'Put your thoughts here',
    likes: 0
};

// The commented out approach causes reducer strict typing issues when registering the reducer in app.module.ts.
// To access the additonal props on Actions you can use ReturnType<> interface
// type Action
//     = ReturnType<typeof PostActions.editText>
//     | ReturnType<typeof PostActions.upvote>
//     | ReturnType<typeof PostActions.downvote>
//     | ReturnType<typeof PostActions.reset>;

// export const postReducer: ActionReducer<Post, Action> = (state: Post = defaultState, action: Action) => {
//     console.log(action.type, state);

//     switch (action.type) {
//         case PostActions.EDIT_TEXT:
//             return { ...state, text: action.payload }
//         case PostActions.UPVOTE:
//             return { ...state, likes: state.likes + 1 }
//         case PostActions.DOWNVOTE:
//             return { ...state, likes: state.likes - 1 }
//         case PostActions.RESET:
//             return defaultState;
//         default:
//             return state;
//     }
// }

export const postReducer: ActionReducer<Post, Action> = createReducer(defaultState,
    on(PostActions.editText, (state, { payload }) => ({ ...state, text: payload })),
    on(PostActions.upvote, state => ({ ...state, likes: state.likes + 1 })),
    on(PostActions.downvote, state => ({ ...state, likes: state.likes - 1 })),
    on(PostActions.reset, () => defaultState)
    );