import settings from '../settings.json';

/**
 * 全局状态
 */
export interface GlobalState {
  settings?: typeof settings;
  userInfo?: {
    name?: string;
    avatar?: string;
    job?: string;
    organization?: string;
    location?: string;
    email?: string;
    permissions: Record<string, string[]>;
  };
  userLoading?: boolean;
}

/**
 * 初始化状态
 */
const initialState: GlobalState = {
  settings,
  userInfo: {
    permissions: {},
  },
};

export default function store(state = initialState, action: any) {
  switch (action.type) {
    case 'update-userInfo': {
      // 更新用户信息和登录态
      const { userInfo = initialState.userInfo, userLoading } = action.payload;
      return {
        ...state,
        userLoading,
        userInfo,
      };
    }
    default:
      return state;
  }
}
