// import { httpService } from './httpService';

export const UserService = {
  login,
  logout,
  signup,
  getUsers,
  getById,
  getLoggedinUser,
};

function getUsers() {
  // return storageService.query('user');
  // return httpService.get(`user`);
}

function getById(userId) {
  // return storageService.get('user', userId);
  // return httpService.get(`user/${userId}`);
}


async function login(userCred) {
  // await httpService.post('auth/login', userCred);
  const users = await getUsers();
  const userConnect = users.find((user) => user.username === userCred.username);
  return _saveLocalUser(userConnect);

  // if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
  // const user = await storageService.post('user', userCred);
  // const user = await httpService.post('auth/signup', userCred);
  return _saveLocalUser(userCred);
}
async function logout() {
  sessionStorage.clear();
  // return await httpService.post('auth/logout')
}
function _saveLocalUser(user) {
  sessionStorage.setItem('loggedinUser', JSON.stringify(user));
  return user;
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null');
}
