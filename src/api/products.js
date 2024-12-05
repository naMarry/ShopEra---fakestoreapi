import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

//pagenation
// export const pagination = async (itemsPerPage, currentPage, totalItems) => {
//     try {
//         // const response = await axios.get(`${API_URL}/products?limit=${itemsPerPage}&page=${currentPage}`);

//         const response = await axios.get(`${API_URL}/products`, {
//             params: { _page: currentPage, _limit: itemsPerPage },
//         });

//         return {
//             data: response.data,
//             totalItems: response.headers["x-total-count"], // Total count from headers
//         };

//     } catch (error) {
//         console.error("Error fetching products:", error);
//         throw error;
//     }
// };

//fetch products 
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        // console.log('fetchProducts' + response.data);

        return response.data;
    } catch (error) {
        console.error('Errors fetching products: ', error);
        throw error;
    }
}

export const fetchProductsByID = async (productID) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productID}`);
        return response.data;
    } catch (error) {
        console.error('Errors fetching products: ', error);
        throw error;
    }
}

export const getProductsCategory = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/categories`);
        return response.data;
    } catch (error) {
        console.error('Errors fetching products: ', error);
        throw error;
    }
}
