import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './Login.css'
import axios from 'axios';
import { redirect } from 'react-router-dom';

function Login() {
    function LoginRequest(event) {
        var email = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        event.preventDefault();

        axios.post('http://localhost:3001/api/v1/user/login', {
            email: email,
            password: password,
        })
        .then(function (response) {
            if (response.status === 200) {
                var token = response.data.body.token;
                localStorage.setItem('token', token);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return (
        <body>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={LoginRequest}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" required />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button type="submit" className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </body>
    );
}

export default Login;