import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

function fetchProducts(productId) {
	return instance.get('/products', {
		params: {
			id: productId,
		},
	});
}

function fetchProductDetails(productId) {
	return instance.get(`/products/${productId}`);
}

//장바구니에 아이템을 추가하는 API 함수
function addToCart({ id, name, price, imageUrl }) {
	return instance.post(`/carts`, {
		id,
		name,
		price,
		imageUrl,
	});
}

//장바구니 조회 API 함수
function fetchCarts() {
	return instance.get('/carts');
}

export { instance, fetchProducts, fetchProductDetails, addToCart, fetchCarts };
