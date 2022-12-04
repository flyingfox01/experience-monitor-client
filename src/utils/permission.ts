export const checkLogin = () => {
  // TODO 暂时使用本地存储
  return localStorage.getItem('userStatus') === 'login';
};
