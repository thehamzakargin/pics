import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID lSaarCWoLC3lftvQdl4t4Mn7q5DI_P_CGbucVqKkpNQ'
        },
        params: {
            query: term,
        },
    });
    console.log(response);

    return response.data.results;
};

export default searchImages;