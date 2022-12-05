import React from 'react';
import { Carousel } from 'antd';
// @ts-ignore
import banner from '@/images/banner.png';
// @ts-ignore
import banner2 from '@/images/banner2.png';
// @ts-ignore
import banner3 from '@/images/banner3.png';

const data = [
  {
    slogan: '功能完善',
    subSlogan: '支持登录注册、日志、报表等功能',
    image: banner,
  },
  {
    slogan: '技术全面',
    subSlogan: '完整演示node/midway + react/semi-design + mysql等全干技术',
    image: banner2,
  },
  {
    slogan: '代码优雅',
    subSlogan: '一步步演示，简洁易懂，专门为小白准备的教学系统',
    image: banner3,
  },
];

export default function LoginBanner() {
  return (
    <Carousel className={'login-carousel'} autoplay>
      {data.map((item, index) => (
        <div key={`${index}`}>
          <div className={'login-carousel-item'}>
            <div className={'login-carousel-title'}>{item.slogan}</div>
            <div className={'login-carousel-sub-title'}>{item.subSlogan}</div>
            <img alt='banner-image' className={'login-carousel-image'} src={item.image} />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
