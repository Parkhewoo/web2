import React from "react";
import "./Notification.css";

class Notification extends React.Component {
    render() {
        return (
            <div className="notification">
                <span className="notification-message">
                    {this.props.message}
                </span>
            </div>
        );
    }

    componentDidMount() {
        console.log(`${this.props.id}: componentDidMount called`);
    }

    componentDidUpdate() {
        console.log(`${this.props.id}: componentDidUpdate called`);
    }

   componentWillUnmount() {
       console.log(`${this.props.id}: componentWillUnmount called`);
   }
}

export default Notification;
