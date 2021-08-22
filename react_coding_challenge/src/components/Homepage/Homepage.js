import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../List/List';
import Pagination from "react-js-pagination";
import classes from './Homepage.module.css'

const Homepage = () => {
  const [ usersList, setUsersList ] = useState('');
  const [ pageno, setPageno ] = useState(1);
  const [ pageCount, setPageCount ] = useState(1);
  const [ activePage, setActivePage ] = useState(1)

  useEffect(() => {
    getUsersList();
  }, [pageno])

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber)
    setPageno(pageNumber)
    getUsersList()
  }

  const getUsersList = () => {
    axios.get(`https://reqres.in/api/users?page=${pageno}`)
    .then(response => {
      setPageCount(response.data.total_pages)
      setUsersList(response.data.data)
    })
    .catch(response => {
      console.log(response)
    })
  }

  return (
    <>
      <div className={classes.topBar}>
        <div>logo</div>
      </div>
      <div className="container mt-5">
        <List
          users = {usersList}
        />
      </div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={6}
        totalItemsCount={12}
        pageRangeDisplayed={pageCount}
        onChange={handlePageChange}
      />
    </>
  )
}

export default Homepage