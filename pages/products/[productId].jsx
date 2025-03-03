import ProductHeader from "@/components/ProductHeader";
import {fetchProductDetails} from "@/api";
import ProductInfo from "@/components/ProductInfo";

//상품 상세 페이지
export default function ProductDetailPage({productDetail}) {
    const productDetailHeader = '상품 상세 정보 페이지';
    return (
            <>
                <ProductHeader title={productDetailHeader}/>
                <ProductInfo productDetail={productDetail}/>
            </>
    )
}

export async function getServerSideProps(context) {

    const id = context.params.productId;
    const {data} = await fetchProductDetails(id);

    return {
        props: {
            productDetail : data
        }
    }
}