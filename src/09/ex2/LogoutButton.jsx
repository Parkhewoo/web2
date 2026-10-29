
function LogoutButton(props) {
    return (
        <button
            className="logout-button"
            onClick={props.onClick}
        >
            로그아웃
        </button>
    );
}

export default LogoutButton;
