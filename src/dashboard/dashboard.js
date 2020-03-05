import React from 'react';


export default class Dashboard extends React.Component {
    render() {
        return(
            <div>
                <nav>
                    <h2>Welcome User!</h2>
                    <ul>
                        <li><a href = "/settings">settings</a></li>
                        <li><a href = "/">logout</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}