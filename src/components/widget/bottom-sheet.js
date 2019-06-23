import React, { useContext } from 'react'
import IconButton from './icon-button'
import { postLove, LoveContext } from '../../store/love-reducer'
import { hashCode } from '../../shared/util'

/**
 * Post navigation (next, prev), reaction.
 */
const BottomSheet = ({ pageContext, title }) => {
  const { slug, next, previous } = pageContext

  const { state, dispatch } = useContext(LoveContext)
  const postId = hashCode(slug).toString()

  function handleReaction (e) {
    e.preventDefault()
    if (!state.loved) {
      postLove(dispatch, { postId, title })
    }
  }

  return (
    <div className='level is-mobile'>
      <div className='level-item'
        style={{ flexGrow: '0' }}>
        <IconButton
          buttonClass={`is-light${next ? '' : ' is-static'}`}
          to={next ? next.fields.slug : null}
          text='Next'
          icon='skip-back'
        />
      </div>
      <div className='level-item'>
        <IconButton
          buttonClass={`is-light${
            state.loved
              ? ' has-text-link is-static'
              : state.loading
                ? ' is-loading'
                : ''
          }`}
          text={`${state.count}`}
          icon='heart'
          onClick={handleReaction}
        />
      </div>
      <div className='level-item is-justify'
        style={{ flexGrow: '0' }}>
        <IconButton
          buttonClass={`is-light${previous ? '' : ' is-static'}`}
          to={previous ? previous.fields.slug : null}
          rightIcon
          text='Prev'
          icon='skip-forward'
        />
      </div>
    </div>
  )
}

export default BottomSheet
