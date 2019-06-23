import React from 'react'

const Toast = ({ shown, message, type, deleteButton, onClose }) => (
  <>
    {shown && (
      <div
        className={`notification is-${type} fade-in`}
        style={{
          position: 'fixed',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          WebkitTransform: 'translateX(-50%)',
          zIndex: '100',
          boxShadow:
            '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'
        }}>
        {deleteButton && <button className='delete' onClick={onClose} />}
        {message}
      </div>
    )}
  </>
)

export default Toast
