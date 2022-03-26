import React from 'react'
import { useContext } from 'react/cjs/react.production.min';
import { varA } from '../App'

const ContextApi = () => {
const hasmi=useContext(varA)
  return (
    <div>{hasmi}</div>
  )
}

export default ContextApi