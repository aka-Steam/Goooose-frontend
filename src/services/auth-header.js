export default function authHeader() {
      let user = JSON.parse(localStorage.getItem('user'));
      
      if (user && user.data.token) {
        // console.log("peredau - -" + user.data.token);
        return { Authorization: 'Bearer ' + user.data.token}; // for Spring Boot back-end
        //return { Authorization: token}; // for Spring Boot back-end
        // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
      } else {
        return {};
      }
    }