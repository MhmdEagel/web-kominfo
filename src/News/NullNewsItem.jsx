import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

export default function NullNewsItem() {
  return (
    <div className='w-[350px] h-[150px] bg-slate-200 text-slate-500 flex justify-center items-center text-7xl'>
        <FontAwesomeIcon icon={faNewspaper} />
    </div>
  )
}
