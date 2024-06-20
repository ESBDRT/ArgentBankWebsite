import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './Login.css'
const axios = require('axios');

function LoginRequest(event) {
    axios.post('http://localhost:3001/api/v1/user/login', {
        firstName: 'Fred',
        lastName: 'Pierrafeu'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

function Login() {
    return (
        <body>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </body>
    )
}

export default Login;