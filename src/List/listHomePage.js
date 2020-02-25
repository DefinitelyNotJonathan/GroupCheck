import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default class ListHomePage extends React.Component {

    render(){
        const lists = 
        [
            {
                "id": "aaaaaaaa",
                "name": "test1",
            },
            {
                "id": "bbbbbbb",
                "name": "test2",
            },
            {
                "id": "ccccccc",
                "name": "test3",
            },
        ]
        return (
            <div className='ListHomePage'>
              <ul className='ListHomePage__list'>
                {lists.map(list => (
                    <li key={list.id}>
                        <NavLink
                            className='ListHomePage__List-link'
                            to={`/list/${lists.id}`}
                        >
                        {list.name}
                        </NavLink>
                    </li>
                ) )}
              </ul>
              <Link to='/add-list'>Add a list</Link>
            </div>
        )
        
    }
}

ListHomePage.defaultProps = {
  lists: []
}