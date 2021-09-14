import { useRef,useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { UserService } from '../../services/userService';
import './login.css';
// import AuthService from '../../services/authService';


const Login = props => {

    const history = useHistory();
    const name = useRef(null);
    const password = useRef(null);
    // const isAdmin = useRef(null);
    const [errorMessage, setErrorMessage] = useState('')


    return (
        <div className="container">
            <div className="login-container">
                <form action="login">
                    {/* <div className="info"> */}
                    <div className="input-field col-12 col-md-6">
                        <input type="name" ref={name} placeholder="Name" className="name-input" />
                    </div>
                    <div className="input-field col-12 col-md-6">
                        <input type="password" ref={password} placeholder="Password" className="password-input" />
                    </div>
                    {/* </div> */}
                    {/* <input type="checkbox" className='is-admin-checkbox' ref={isAdmin} />
                    <span className="checkbox-text">Dude, are you an admin?</span> */}
                    <NavLink to="/signup">Signup</NavLink>
                    <div className="buttons-container">
                        <div onClick={login} className="submission-button unselectable">
                            <span>Login</span>
                        </div>
                    </div>
                    <div id='error'>{errorMessage}</div>
                </form>
            </div>
        </div>
    )

    function login() {
        const user = getUser();
        console.log(user);
        UserService.login(user).then(res => {
            history.push('/game');
            console.log(res);

        })
            .catch(err => {
                setErrorMessage('Login failed')
                console.log(err, 'login faild');
                throw(err)

            });
    }

    function getUser() {
        return {
            userName: name.current.value,
            password: password.current.value,
            // isAdmin: + isAdmin.current.checked
        }
    }
}

export default Login;