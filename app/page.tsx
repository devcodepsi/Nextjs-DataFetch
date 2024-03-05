/** work flow
 * 1. 리스트 데이터 불러오기
 **/

import { Suspense } from 'react';
import Link from 'next/link';
import Loader from '../components/Loader';

// get data
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: {
        revalidate: 60 * 60,
      },
    });
    if (!res.ok) {
      throw new Error('Error');
    }
    return res.json();
}

// page render
export default async function Index() {
  const data = await getData();
  return (
    <Suspense fallback={<Loader />}>
      <ul className="p-3 grid grid-cols-2 gap-3">
        {data.map((item: { id: number; item: { title: string } }) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </Suspense>
  );
}

// list item
const Item = ({ item }: any) => {
  return (
    <li className="p-3 border">
      <h3 className="font-bold">{item.title}</h3>
      <p className="mt-2">{item.body}</p>
      <Link href={`/detail/${item.id}`} className="mt-3 block underline">
        Read More
      </Link>
    </li>
  );
};
