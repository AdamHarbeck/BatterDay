import axios from 'axios'


const api_url = "https://bdapi-stage.herokuapp.com/auth";

class AuthService {
    // The function to login
    login(email, password) {
      return axios.post(api_url + '/login', {
        email, 
        password
      }).then(res => {
        console.log(res.data)
          if (res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data));
          }
          return res.data;
      });
    }

    // The function to logout
    logout() {
      localStorage.removeItem("user");
      window.location.assign('/');
    };

    // The function to signup
    signup(first_name, last_name, email, password) {
      return axios.post(api_url + '/register', {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
      });
    }

    // Function to get the current user
    getUser() {
      console.log(localStorage.getItem('user'));
      return JSON.parse(localStorage.getItem('user'));
    }
    // This will need to be updated with the password reset functionality
    // /forgot_password - on the react end. Will show a place for the user to enter an email adderess.
    // Function to reset password
    forgot_password(email) {
      return axios.post(api_url + '/password_reset', { email })
    }

    // Send the user.id and token to the back and check to make sure it is correct
    // return a true/false to display the specific HTML
    check_jwt(data) {
      return axios.post(api_url + '/check_token', { data })
    }
    // Update the password [post]
    update_password(data) {
      return axios.put(api_url + '/resetpwd', { data })
    }
}
export default new AuthService();
