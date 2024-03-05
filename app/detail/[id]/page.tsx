/** work flow
 * 1. 상세내용 불러오기
 * 2. 상세내용에 따라 동적으로 metatag 변경
 **/

import { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Loader from '../../../components/Loader';

// get data
async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Error');
  }
  return res.json();
}

// meta
export async function generateMetadata({ params }: { params: { id: number } }) {
  const data = await getData(params.id);
  return {
    title: `${data.title} > siteName`,
  };
}

// ssg (static site generate)
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const resData = await res.json();
  const paths = resData.map((item: { id: string }) => ({
    params: { id: item.id.toString() },
  }));
  return { paths, fallback: false };
}

// page render
export default async function Detail({ params }: { params: { id: number } }) {
  const data = await getData(params.id);
  return (
    <Suspense fallback={<Loader />}>
      <div className="p-3">
        <div className="border-b border-dashed pb-3 mb-3">
          title : {data.title}
        </div>
        <div className="p-3">{data.body}</div>
        <div className="p-3">
          <Link href="/" className="underline">
            go List
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
