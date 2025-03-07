import { removeCartItem } from '@/api';

export default async function handler(request, response) {
	const id = request.body.id;
	console.log(`id : ${id}`);
	const { data } = await removeCartItem(id);

	response.status(200).send(`${data.name} 삭제가 되었습니다.`);
}
