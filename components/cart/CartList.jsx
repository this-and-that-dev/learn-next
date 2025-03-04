import Image from 'next/image';
import styles from './CartList.module.css';

export default function CartList({carts}) {

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
                <p>총 가격 : </p>
                <p>총 수량 : </p>
            </div>
        </>
    )
}