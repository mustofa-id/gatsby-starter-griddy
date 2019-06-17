import React from 'react'
import { Link } from 'gatsby'
import Icon from './icon'

const DynamicLink = ({ onClick, className, to, external, children }) => {
  const classStyle = `button${className ? ' ' + className : ''}`
  return (
    <>
      {!to ? (
        <div className={classStyle} onClick={onClick}>
          {children}
        </div>
      ) : external ? (
        <a
          className={classStyle}
          href={to}
          target='_blank'
          rel='noopener noreferrer'>
          {children}
        </a>
      ) : (
        <Link className={classStyle} to={to}>
          {children}
        </Link>
      )}
    </>
  )
}

const IconButton = ({
  icon, // feather icon name
  text,
  to, // target url
  rightIcon, // if true or defined icon will on right next of text
  external, // if true or defined url will open as external link
  buttonClass,
  iconClass,
  iconSize = '16', // size of icon, default is 16
  onClick
}) => {
  const txt = text && <span>{text}</span>
  const icn = (
    <span className={`icon${iconClass ? ' ' + iconClass : ''}`}>
      <Icon size={iconSize} name={icon} />
    </span>
  )
  return (
    <DynamicLink
      onClick={onClick}
      to={to}
      className={buttonClass}
      external={external}>
      {rightIcon ? (
        <>
          {txt}
          {icn}
        </>
      ) : (
        <>
          {icn}
          {txt}
        </>
      )}
    </DynamicLink>
  )
}

export default IconButton
