import { useDispatch } from 'react-redux';
import { reactionAdded } from './postSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '💗',
    coffee: '☕',
    rocket: '🚀'
}




const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return ( 
            <button
                type="button"
                key={name}
                onClick={() =>
                    dispatch(reactionAdded({postId: post.id, reaction: name}))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
  return (
    <div>
      {reactionButtons}
    </div>
  )
}

export default ReactionButtons
