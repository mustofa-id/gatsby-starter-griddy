import React from 'react'
import { Link } from 'gatsby'
import { queryType } from '../../shared/util'
import Icon from './icon'

const ALL_POST = 'All'

const Category = ({ categories, type }) => {
  const allCategories = [ALL_POST, ...categories]

  return (
    <div className='navbar-end'>
      <div className='navbar-item has-dropdown is-hoverable'>
        <p className='navbar-link is-arrowless navbar-hidden'>
          <Icon
            name='more'
            size='22'
            strokeWidth='1.5px' />
        </p>
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
