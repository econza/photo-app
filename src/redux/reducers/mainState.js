import { GET_IMAGES, SET_IMG_ID, SET_IMAGE_INFO } from '../actions'

let initialState = {
    images: [],
    imageInfo: null,
    seletedId: null,
};

const imagesState = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                images: action.images
            };
        case SET_IMG_ID:
            return {
                ...state,
                seletedId: action.seletedId,
            }
        case SET_IMAGE_INFO:
            return {
                ...state,
                imageInfo: action.imageInfo
            }
        default:
            return state;
    };
};

export default imagesState;
