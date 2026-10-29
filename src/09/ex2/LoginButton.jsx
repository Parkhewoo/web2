
function LoginButton(props) {
    return (
        <button
            className="login-button"
            onClick={props.onClick}
        >
            로그인
        </button>
    );
}

export default LoginButton;
