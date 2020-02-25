import React from 'react';
import {Link, Router} from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import ListHomePage from '../List/listHomePage';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="Homepage-Container">
                <Dashboard></Dashboard>
                <ListHomePage></ListHomePage>
            </div>
    
        )
    }
}