import * as ActionTypes from '../constants/ActionTypes';

const wishesReducerDefaultState = [
    {
        uuid: 'asd2asd5a4sd32as',
        priority: '1',
        owner: '2342343245asfsdf',
        price: '1233',
        desc: 'it \'s a wonderful thing to wish for',
        wishlist:'asd5asd5ads5'
    }, {
        uuid: 'asd2asd5334a4sd32as',
        priority: '5',
        owner: '2342343dfsdfasfsdf',
        price: '1433',
        desc: 'it \'s a wonderful thing to wish for but different',
        wishlist:'asd5asd5ads5'
    }
];


export default (state = wishesReducerDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WISH:
            return [...state, action.wish];
        case ActionTypes.ADD_WISHES:
            return action.wishes;
        default:
            return state;
    }

}