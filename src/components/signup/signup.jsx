import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
// import AuthService from '../../services/authService';
import { UserService } from '../../services/userService';
import './signup.css';

const Signup = props => {
    const history = useHistory();

    const name = useRef(null);
    const password = useRef(null);
    // const isAdmin = useRef(null);

    // TODO: make the UI prettier
    // TOOD: hopefully make valid token calls. otherwise probably just comment-out the JWT middleware or save it in local-storage for POC
    // TODO: display a message on the screen that notifies the user if there is something invalid about their input (bad name / password)

    return (
        <div className="container">
            <div className="signup-container">
                <form action="signup">
                <h1>Signup</h1>
                    {/* <div className="info"> */}
                    <div className="input-field col-12 col-md-6">
                        <input type="name" ref={name} placeholder="name" className="name-input" />
                    </div>
                    <div className="input-field col-12 col-md-6">
                        <input type="password" ref={password} placeholder="password" className="password-input" />
                    </div>
                    <button className="Register-btn" onClick={signUp}>Signup</button>
                    {/* <div className="buttons-container">
                        <div onClick={onRegisterClick} className="submission-button unselectable">
                            <span>Register</span>
                        </div>
                    </div> */}
                </form>
            </div>
        </div>
    )

    // function onLoginClick() {
    //     const user = getCurrentUserObject();
    //     console.log(user);
    //     AuthService.login(user).then(value => {
    //         history.push('/game');
    //         console.log(value);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }

    function signUp() {
        const user = getUser();
        console.log(user);
        UserService.login(user).then(res=>{
            history.push('/game');
            console.log(res);

        })
  .catch (err => {
    console.log(err);
});
}

    // function onSignUp() {
    //     const user = getUser();
    //     console.log(user);
    //     AuthService.register(user).then(value => {
    //         history.push('/game');
    //         console.log(value);
    //     })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    function getUser() {
        return {
            userName: name.current.value,
            password: password.current.value,
            // isAdmin: + isAdmin.current.checked
        }
    }
}

export default Signup;