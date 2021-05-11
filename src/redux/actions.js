export const GET_IMAGES = "@main/GET_IMAGES";
export const SET_IMG_ID = "@main/SET_IMG_ID";
export const SET_IMAGE_INFO = "@main/SET_IMAGE_INFO";

// @main

export const getImages = (images) => {
        return {
            type: GET_IMAGES,        
            images
        };
    }

export const setImgId = (seletedId) => {
    return {
        type: SET_IMG_ID,
        seletedId
    }
}

export const setImageInfo = (imageInfo) => {
    return {
        type: SET_IMAGE_INFO,
        imageInfo
    }
}
