import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import config from '../config'
import PropTypes from 'prop-types'


class Item extends React.Component {
  static defaultProps ={
    onDeleteItem: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const itemId = this.props.id

    fetch(`${config.API_ENDPOINT}/item/${itemId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteItem(itemId)
        this.props.onDeleteItem(itemId)
      })
      .catch(error => {
        console.error({ error })
      })
  }
  render() {
    const { name, id, content, priority } = this.props
    return (
      <div className='Item'>
        <h2 className='Item__title'>
          <Link to={`/item/${id}`}>
            {name}
          </Link>
        </h2>
        <div className='Item__priorities'>
          Priority:
            {' '}
            <span className='Priority'>
              {priority}
            </span>
        </div>
        <div className='Item__content'>
            Content:
            <div className='Content'>
                {content}
            </div>
        </div>
        <button
          className='Item__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          {' '}
          remove
        </button>
      </div>
    )
  }
}
Item.propTypes={
  onDeleteItem: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};


export default Item;
