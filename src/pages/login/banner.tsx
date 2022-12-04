import React from 'react';
import { Carousel } from 'antd';

const data = [
  {
    slogan: '功能完善',
    subSlogan: '支持登录注册、日志、报表等功能',
    image:
      'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
  },
  {
    slogan: '技术全面',
    subSlogan: '完整演示node/midway + react/semi-design + mysql等全干技术',
    image:
      'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
  },
  {
    slogan: '代码优雅',
    subSlogan: '一步步演示，简洁易懂，专门为小白准备的教学系统',
    image:
      'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
  },
];

export default function LoginBanner() {
  return (
    <Carousel className={'login-carousel'}>
      {data.map((item, index) => (
        <div key={`${index}`}>
          <div className={'carousel-item'}>
            <div className={'carousel-title'}>{item.slogan}</div>
            <div className={'carousel-sub-title'}>{item.subSlogan}</div>
            <img alt='banner-image' className={'carousel-image'} src={item.image} />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
