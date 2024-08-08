import PropTypes from 'prop-types'

export function UserGreeting(props) {

    const welcome_message =  <h2 className="welcome-message">Welcome {props.username}</h2>
    const login_prompt = <h2 className="login-prompt">You are not logged in...</h2>

    return(props.isLoggedIn ?  welcome_message : login_prompt)
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.propTypes = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting