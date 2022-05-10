declare module 'StoreTypes' {
    import { ThunkAction, AnyAction } from '@reduxjs/toolkit';
    import { ThunkDispatch } from 'redux-thunk';

    export type Store = ReturnType<typeof import('./index').createStore>;

    export type State = ReturnType<typeof import('./index').rootReducer>;

    export type ThunkExtraArgument = {
        services: import('../services').Services;
    };

    export type Dispatch = ThunkDispatch<State, ThunkExtraArgument, AnyAction>;

    export type Thunk<T = Promise<void>> = ThunkAction<T, State, ThunkExtraArgument, AnyAction>;

}