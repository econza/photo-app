export const GET_IMAGES = "@main/GET_IMAGES";



// @main

export const getImages = (images) => {
        return {
            type: GET_IMAGES,        
            images: images
        };
    }

