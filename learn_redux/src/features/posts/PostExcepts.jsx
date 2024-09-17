import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import Reactions from './ReactionButtons';
import { Link } from 'react-router-dom';

const PostExcepts = ({post}) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}...</p>
      <p>
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        </p>
        <Reactions post={post} />
    </article>
  )
}

export default PostExcepts
