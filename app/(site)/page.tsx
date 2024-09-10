import { sleep } from '@/lib/utils';
import React from 'react';

const page = async () => {
  //루트레이아웃 도는동안 페이지도 돌아간다
  // console.log('before homepage sleep');
  // await sleep(4000);
  //루트 2초 뒤에 남은 2초를 하는동안
  // console.log('after homepage sleep');
  return <div>HomePage</div>;
};

export default page;
