import React from 'react'
import { Link } from 'react-router-dom'
import STORE from '../store'
import List from './list'

export default class ListHomePage extends React.Component {

    render(){
        const lists = STORE.lists
        console.log(lists)
        return (
            <div className='ListHomePage'>
              <ul className='ListHomePage__list'>
                {
                lists.map( list => (
                    <List 
                        id = {list.id}
                        name = {list.name}
                    />
                ))
                }
              </ul>
              <Link to='/add-list'>Add a list</Link>
            </div>
        )
        
    }
}

ListHomePage.defaultProps = {
  lists: []
}