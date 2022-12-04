import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import cs from 'classnames';
import './index.less';

const { Footer } = Layout;

function Component(props: any = {}) {
  const { className, ...restProps } = props;
  return (
    <Footer className={cs(className)} {...restProps}>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span>Copyright © 2022 flyingfox. All Rights Reserved. </span>
      </span>
      <span>
        <span style={{ marginRight: '24px' }}>帮助</span>
        <span>反馈</span>
      </span>
    </Footer>
  );
}

export default Component;
