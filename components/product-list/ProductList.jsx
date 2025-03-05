import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ProductList.module.css';
import Link from 'next/link';
import { fetchProducts } from '@/api';

export default function ProductList() {
	const [products, setProducts] = useState();

	useEffect(() => {
		fetchProducts().then(res => {
			setProducts(res.data);
		});
	}, []);

	return (
		<ul>
			{products &&
				products.map(product => (
					<li key={product.id} className={styles.item}>
						<Link href={`/products/${product.id}`}>
							<div>
								<Image
									src={product.imageUrl}
									alt={product.name}
									width={300}
									height={250}
								/>
							</div>
							<div>{product.name}</div>
						</Link>
					</li>
				))}
		</ul>
	);
}
