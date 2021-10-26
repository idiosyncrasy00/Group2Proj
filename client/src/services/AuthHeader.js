export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accesstoken) {
    return {
      Authorization: 'Bearer ' + user.accesstoken
    };
  } else {
    return {};
  }
}