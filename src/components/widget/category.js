import React from 'react'
import { Link } from 'gatsby'
import { queryType } from '../../shared/post-filter'

const ALL_POST = 'All'

const Category = ({ categories, type }) => {
  const allCategories = [ALL_POST, ...categories]

  return (
    <div className='navbar-end'>
      <div className='navbar-item has-dropdown is-hoverable'>
        <p className='navbar-link'>Categories</p>
        <div className='navbar-dropdown is-right'>
          {allCategories.map((e, i) => {
            return (
              <Link
                key={`cat-${e}-${i}`}
                className='navbar-item'
                to={
                  e === ALL_POST
                    ? `/${low(type)}`
                    : `/${low(type)}?${queryType.category}=${low(e)}`
                }>
                {e}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const low = val => val.toLowerCase()

export default Category
