import axios from "axios";

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID UbmTgEmLpazX-cgYuBp8gFL0pFMncN676mxFLVvx39s'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
}

export default searchImages;