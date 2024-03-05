/** work flow
 * 1. openGraph meta 태그 넣는 방법
 **/

import type { Metadata } from 'next';

// meta
const metaTexts = { title: 'Sub1 page', description: 'this is sub1 page' };
const metaImage = {
  images: [
    'https://stackblitzstartersc42cvt-c2qw-shjb6g9f--3000--ca1b5e18.local-credentialless.webcontainer.io/next.svg',
  ],
};

export const metadata: Metadata = {
  ...metaTexts,
  openGraph: {
    ...metaTexts,
    ...metaImage,
  },
  twitter: {
    ...metaTexts,
    ...metaImage,
  },
};

// page render
const Sub1 = () => {
  return (
    <div className="p-3">
      <p>Sub1 page contents</p>
    </div>
  );
};
export default Sub1;
