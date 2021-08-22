import React from 'react';
import classes from './List.module.css'

const List = (props) => {
  const usersList = props.users && props.users.data && props.users.data.map((user, i) => {
    return (
      <div className='col-md-3' key={user.id}>
        <div className={classes.tile}>
          <div className={classes.thumbnailContainer}>
            <img className={classes.thumbnail} src={user.avatar} alt="avatar" />
          </div>
          <div className={classes.details}>
            <div className={classes.name}>{user.first_name}</div>
            <div className={classes.email}>{user.email}</div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="row">
      {
        props.users && props.users.data && usersList
      }
    </div>
  )
}

export default List