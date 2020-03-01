import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import STORE from '../store'
import  getAllLists from '../itemsHelpers'
import List from './list'

export default class ListHomePage extends React.Component {

    render(){
        //Need to add in as props

        // const lists = 
        // [
        //     {
        //         "id": "aaaaaaaa",
        //         "name": "test1",
        //     },
        //     {
        //         "id": "bbbbbbb",
        //         "name": "test2",
        //     },
        //     {
        //         "id": "ccccccc",
        //         "name": "test3",
        //     },
        // ]
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