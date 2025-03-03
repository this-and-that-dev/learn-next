import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000"
})

function fetchProducts(productId) {
    return instance.get('/products', {
        params : {
            id : productId
        }
    })
}

function fetchProductDetails(productId) {
    return instance.get(`/products/${productId}`)
}

export {instance, fetchProducts, fetchProductDetails};