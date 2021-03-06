export const userApi = {
  // GET
  getUserUrl: () => '/api/users',
  // POST
  addUserUrl: () => '/api/users',
  // PUT
  updateUserUrl: id => '/api/users/' + id,
  // DELETE
  deleteUserUrl: id => '/api/users/' + id,
  // GET 注册使用email查询
  getUserByEmailUrl: email => '/api/users/register/' + email,
  // GET
  getSingleUserUrl: id => '/api/users/' + id,
  // GET
  getUserListUrl: id => '/api/users/userList/'
}

export const authApi = {
  // POST
  loginUrl: () => '/api/auth/login',
  // GET
  loginOutUrl: () => '/api/auth/loginOut'
}

export const captchaApi = {
  // POST
  captchaEmailUrl: () => '/api/captchas',
  // GET
  getCaptchaEmailUrl: () => '/api/captchas',
  // GET
  getImgCaptchaUrl: () => '/api/captchas/imgCaptcha'
}
