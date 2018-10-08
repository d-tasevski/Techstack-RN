import data from '../data';
import types from './types';

const initialState = {
	data,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_LIBRARIES:
			return { ...state };
		default:
			return state;
	}
};
