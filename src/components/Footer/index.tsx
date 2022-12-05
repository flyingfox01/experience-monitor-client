import React from 'react';
import { Layout } from 'antd';
import cs from 'classnames';
import './index.less';

const { Footer } = Layout;

function Component(props: any = {}) {
  const { className, ...restProps } = props;
  return (
    <Footer className={cs(className)} {...restProps}>
      <span>Copyright © 2022 flyingfox. All Rights Reserved. </span>
    </Footer>
  );
}

export default Component;
