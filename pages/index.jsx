// '/' 에 해당하는 페이지

import ProductList from '@/components/product-list/ProductList';
import ProductHeader from '@/components/ProductHeader';

function ProductPage() {
	const headerTitle = '상품 목록 페이지';

	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductList />
		</div>
	);
}

/**
 * 1. 상품목록 페이지 - '/'
 * 2. 상품 상세 페이지 - '/products/productId'
 * 3. 장바구니 페이지 - '/cart'
 */
export default ProductPage;
