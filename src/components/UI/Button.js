import React from 'react'
import classes from './Button.module.css'

const Button = ({onclick, children}) => {
  return (
    <button className={classes.button}
    onClick={onclick}
    type='submit'>{children}</button>
  )
}

export default Button