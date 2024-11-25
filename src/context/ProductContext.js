import { createContext, useState, useEffect } from "react";
import { fetchProducts, fetchProductsByID, getProductsCategory } from "../api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [singleProduct, setSingleProduct] = useState(null);
    // const [userFeedback, setUserFeedback] = useState([]);
    // const [totalItems, setTotalItems] = useState(0);
    // const [totalPrice, setTotalPrice] = useState(0);

    // fetch data from api products 
    useEffect(() => {

        const loadProducts = async () => {
            try {
                const productsData = await fetchProducts();
                const productsCategory = await getProductsCategory();

                setLoading(false);

                setProducts(productsData);
                setCategories(productsCategory);
            } catch (error) {
                setError(error);
                setLoading(false);
                console.error("Failed to fetch products:", error);
            }
        };

        loadProducts();
    }, []);

    // //handle single product detail
    // const getProductById = async (id) => {
    //     try {
    //         const product = await fetchProductsByID(id);
    //         setSingleProduct(product);

    //     } catch (error) {
    //         throw error;
    //     }
    // };

    // // //add to cart btn management
    // const [clickedBtn, setClickedBtn] = useState({});
    // const [selectedItems, setSelectedItems] = useState({});

    // const handleBtnVisibility = (pro_id) => {
    //     setClickedBtn(prev => {
    //         const newClickedBtn = { ...prev, [pro_id]: !prev[pro_id] };

    //         if (!prev[pro_id]) {
    //             setSelectedItems(prevItems => ({ ...prevItems, [pro_id]: 1 }));
    //         }

    //         return newClickedBtn;
    //     });
    // };

    // //remove item from cart
    // const handleRemoveCart = (pro_id) => {
    //     setSelectedItems(prev => {
    //         const newSelectedItems = { ...prev };
    //         delete newSelectedItems[pro_id];
    //         return newSelectedItems;
    //     });
    // };

    // //subtract cart
    // const handleDecreaseCart = (pro_id) => {
    //     setSelectedItems(prev => {
    //         const newQuntity = Math.max((prev[pro_id] || 1) - 1, 0);
    //         const newClickedBtn = { ...clickedBtn };

    //         if (newQuntity === 0) {
    //             newClickedBtn[pro_id] = false;
    //         }

    //         setClickedBtn(newClickedBtn);
    //         return { ...prev, [pro_id]: newQuntity };
    //     });
    // }

    // //add to cart
    // const handleIncreaseCart = (pro_id) => {
    //     setSelectedItems(prev => ({ ...prev, [pro_id]: (prev[pro_id] || 0) + 1 }))
    // }

    // useEffect(() => {
    //     const itemsCount = Object.values(selectedItems).reduce((acc, qty) => acc + qty, 0);
    //     const priceCount = Object.entries(selectedItems).reduce((acc, [id, qty]) => {
    //         const product = products.find(prod => prod.id === Number(id));

    //         return acc + (product ? product.price * qty : 0);
    //     }, 0);

    //     setTotalItems(itemsCount);
    //     setTotalPrice(priceCount);
    // }, [selectedItems, products]);

    // //shipping fee
    // const [shipping, setShipping] = useState(1);
    // const handleShippingFee = (e) => {
    //     setShipping(Number(e.target.value));
    // }

    // //filter products
    // const [filteredProducts, setFilteredProducts] = useState(products);
    // const filterProducts = (category) => {
    //     let filtered = [...products];
    
    //     if (category && category !== 'all') {
    //         filtered = filtered.filter(product => product.category === category);
    //     }
    
    //     setFilteredProducts(filtered);
    // };
    

    return (
        <ProductContext.Provider value={{
            // clickedBtn,
            // setClickedBtn,
            // selectedItems,
            // totalItems,
            // totalPrice,
            // shipping,
            // handleShippingFee,
            // filteredProducts,
            // filterProducts,
            products,
            categories,
            // singleProduct,
            // userFeedback,
            // getProductById,
            // handleBtnVisibility,
            // handleIncreaseCart,
            // handleDecreaseCart,
            // handleRemoveCart
        }}>
            {children}
        </ProductContext.Provider>
    )
}