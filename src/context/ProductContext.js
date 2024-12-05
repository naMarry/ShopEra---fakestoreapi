import { createContext, useState, useEffect } from "react";
import { fetchProducts, fetchProductsByID, getProductsCategory } from "../api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [singleProduct, setSingleProduct] = useState(null);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [shippingInfo, setShippingInfo] = useState({
        fullName: '',
        address: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
        email: '',
        phone: ''
    });

    //handling user shipping info
    const updateShippingInfo = (newInfo) => {
        setShippingInfo((prevInfo) => ({
            ...prevInfo,
            ...newInfo
        }));
    };

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

    //handle single product detail
    const getProductById = async (id) => {
        try {
            const product = await fetchProductsByID(id);
            if (!product) {
                throw new Error('Product not found');
            }
            setSingleProduct(product);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    // //add to cart btn management
    const [selectedItems, setSelectedItems] = useState({});

    const handleRemoveCart = (pro_id) => {
        setSelectedItems((prev) => {
            const newSelectedItems = { ...prev };
            delete newSelectedItems[pro_id];
            return newSelectedItems;
        });
    };

    const handleDecreaseCart = (pro_id) => {
        setSelectedItems(prev => {
            const newQuntity = Math.max((prev[pro_id] || 1) - 1, 0);

            return { ...prev, [pro_id]: newQuntity };
        });
    }

    const handleIncreaseCart = (pro_id) => {
        setSelectedItems(prev => ({ ...prev, [pro_id]: (prev[pro_id] || 0) + 1 }))
    }


    //overall product price& items count
    useEffect(() => {
        const itemsCount = Object.values(selectedItems).reduce((acc, qty) => acc + qty, 0);
        const priceCount = Object.entries(selectedItems).reduce((acc, [id, qty]) => {
            const product = products.find(prod => prod.id === Number(id));

            return acc + (product ? product.price * qty : 0);
        }, 0);

        setTotalItems(itemsCount);
        setTotalPrice(priceCount.toFixed(2));
    }, [selectedItems, products]);

    //show only the products that was selected
    const selectedProducts = products.filter((product) => selectedItems[product.id] > 0);

    return (
        <ProductContext.Provider value={{
            products,
            categories,
            loading,
            error,
            selectedProducts,
            selectedItems,
            setSelectedItems,
            handleDecreaseCart,
            handleIncreaseCart,
            handleRemoveCart,
            totalItems,
            totalPrice,
            setTotalItems,
            setTotalPrice,
            getProductById,
            singleProduct,
            shippingInfo,
            updateShippingInfo
        }}>
            {children}
        </ProductContext.Provider>
    )
}