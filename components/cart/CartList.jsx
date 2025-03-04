import Image from 'next/image';
import styles from './CartList.module.css';

export default function CartList({carts}) {

    const totalPrice = carts.reduce((acc, item) => acc + parseFloat(item.price), 0);
    return (
        <>
            <div>
                <ul>
                    {carts.map(cart => {
                        return (
                            <li key={cart.id} className={styles.item}>
                                <div><Image src={cart.imageUrl} width={100} height={100} alt={cart.name}></Image></div>
                                <div className={styles.description}>
                                    <div>{cart.name}</div>
                                    <div>{cart.price}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <p>총 가격 : {totalPrice.toLocaleString()}</p>
                <p>총 수량 : {carts.length}</p>
            </div>
        </>
    )
}