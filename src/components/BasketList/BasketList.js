import React from 'react'
import BasketItem from '../BasketItem/BasketItem'

export default function BasketList({list, totalCount}) {
  return (
    <div>
        {
            list.map(el => <BasketItem key={el.id} {...el} totalCount={totalCount}/>)
        }
    </div>
  )
}
