import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
// import AuthService from '../../services/authService';
import { UserService } from '../../services/userService';
import './signup.css';

const Signup = props => {
    const history = useHistory();
    const name = useRef(null);
    const password = useRef(null);

    return (
        <div className="container">
            <div className="signup-container">
                <form action="signup">
                    <h1>Signup</h1>
                    <div className="input-field col-12 col-md-6">
                        <input type="name" ref={name} placeholder="name" className="name-input" />
                    </div>
                    <div className="input-field col-12 col-md-6">
                        <input type="password" ref={password} placeholder="password" className="password-input" />
                    </div>
                    <button className="Register-btn" onClick={signUp}>Signup</button>
                </form>
            </div>
        </div>
    )


    function signUp() {
        const user = getUser();
        UserService.login(user).then(res => {
            history.push('/game');
        })
            .catch(err => {
                console.log(err);
            });
    }

    function getUser() {
        return {
            userName: name.current.value,
            password: password.current.value,
        }
    }
}

export default Signup;