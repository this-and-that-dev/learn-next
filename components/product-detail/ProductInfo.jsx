import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { addToCart } from '@/api';

export default function ProductInfo({
	productDetail: { id, name, price, imageUrl },
}) {
	const router = useRouter();
	const addCart = async () => {
		// 1. 장바구니에 아이템을 담는 API 함수 호출
		const response = await addToCart({ id, name, price, imageUrl });
		console.log(response);
		alert('장바구니에 추가됨');
		// 2. 장바구니 페이지로 이동
		await router.push('/cart');
	};

	return (
		<div className={styles.container}>
			<div>
				<Image src={imageUrl} alt={name} width={200} height={200} />
			</div>
			<div className={styles.description}>
				<p>{name}</p>
				<p>{price}</p>
				<button onClick={addCart}>장바구니 담기</button>
			</div>
		</div>
	);
}
