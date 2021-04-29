import { GET_IMAGES } from '../actions'

let initialState = {
    images: []
};

const imagesState = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                images: action.images
            };
        default:
            return state;
    };
};

export default imagesState;

