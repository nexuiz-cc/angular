import { createAction, props } from '@ngrx/store';

export const success = createAction('[Movies API] Movies Loaded Success', props<any>());
export const error = createAction('[Movies API] Movies Loaded Error');
