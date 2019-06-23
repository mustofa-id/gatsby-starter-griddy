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
      <div className='level-item'>
        <IconButton
          buttonClass={`is-light is-rounded${previous ? '' : ' is-static'}`}
          to={previous ? previous.fields.slug : null}
          text='Prev'
          icon='skip-back'
        />
      </div>
      <div className='level-item'>
        <IconButton
          buttonClass={`is-light is-rounded${
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
      <div className='level-item'>
        <IconButton
          buttonClass={`is-light is-rounded${next ? '' : ' is-static'}`}
          to={next ? next.fields.slug : null}
          rightIcon
          text='Next'
          icon='skip-forward'
        />
      </div>
    </div>
  )
}

export default BottomSheet
