import {fetchCarts} from "@/api/index.js";
import CartHeader from "@/components/cart/CartHeader";
import CartList from "@/components/cart/CartList";

export default function CartPage({carts}) {
    return (
        <>
            <CartHeader />
            <CartList carts={carts} />
        </>
    )
}

export async function getServerSideProps() {
    const {data} = await fetchCarts();
    return {
        props: {
            carts: data
        }
    }
}