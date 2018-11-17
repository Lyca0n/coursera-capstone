const wishlistsReducerDefaultState = [
    {
        uuid: 'asd2asd5a4sd32as',
        event: 'Eddie\'s Wedding',
        desc: 'Gift list ',
        owner: '2342343245asfsdf',
        createdat: '1541727128460',                
    },     {
        uuid: 'asd2asd5a4sd3asasas',
        event: 'Eddie\'s bachelor party',
        desc: 'regretable party list ',
        owner: '2342343245asfsdf',
        createdat: '1541727128460',                
    }
];

import * as ActionTypes from '../constants/ActionTypes';

export default (state = wishlistsReducerDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LIST:
            return [...state, action.list];
        case ActionTypes.ADD_LISTS:
            return action.lists;
        default:
            return state;
    }

}