import React from 'react'
import { Link } from 'gatsby'
import Icon from './icon'

const DynamicLink = ({
  onClick,
  className,
  to,
  external,
  children,
  ...wrapperProps
}) => {
  const classStyle = `button${className ? ' ' + className : ''}`
  return (
    <>
      {!to ? (
        <div className={classStyle} onClick={onClick} {...wrapperProps}>
          {children}
        </div>
      ) : external ? (
        <a
          className={classStyle}
          href={to}
          target='_blank'
          rel='noopener noreferrer'
          {...wrapperProps}>
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
  buttonClass,
  iconClass,
  iconSize = '16', // size of icon, default is 16
  onClick,
  ...wrapperProps
}) => {
  const external =
    (to && (to.includes('http') || to.includes('mailto'))) ||
    wrapperProps.download
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
      external={external}
      {...wrapperProps}>
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
