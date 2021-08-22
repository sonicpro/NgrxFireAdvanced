import { createAction, props } from '@ngrx/store';

export const EDIT_TEXT: string = '[Post] Edit';
export const UPVOTE: string = '[Post] Upvote';
export const DOWNVOTE: string = '[Post] Downvote';
export const RESET: string = '[Post] Reset';

// Export actions as classes that implement Action interface - that causes reducer strict typing issues in ngrx 12
// export class EditText implements Action {
//     readonly type = EDIT_TEXT;

//     constructor(public payload: string) {
//     }
// }

// export class Upvote implements Action {
//     readonly type = UPVOTE;
//     readonly payload = undefined;
// }

// export class Downvote implements Action {
//     readonly type = DOWNVOTE;
//     readonly payload = undefined;
// }

// export class Reset implements Action {
//     readonly type = RESET;
//     readonly payload = undefined;
// }

// Create a bunch of action creators to get a type-safe Actions with additional props
export const editText = createAction(
    EDIT_TEXT,
    props<{ payload: string }>()
);

export const upvote = createAction(
    UPVOTE
);

export const downvote = createAction(
    DOWNVOTE
);

export const reset = createAction(
    RESET
);