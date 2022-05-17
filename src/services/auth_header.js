// This method checks if there is a user in local storage, and if
// there is a user with badge (JWT), return HHTP auth header
function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };
  } 
  return {};
}
export default authHeader;
