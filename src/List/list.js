import React from 'react'
import {NavLink} from 'react-router-dom'

class List extends React.Component {
    render() {
        const id = this.props.id
        const name = this.props.name
        return (
            <li key = {id}>
                <NavLink
                    className='ListHomePage__List-link'
                    to={`/list/${id}`}
                >
                {name}
                </NavLink>
            </li>
        )
    }
}

export default List;