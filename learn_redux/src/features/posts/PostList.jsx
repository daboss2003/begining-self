import { useSelector } from 'react-redux'
import { selectAllPosts, getPostStatus, getPostError } from './postSlice';
import PostExcepts from './PostExcepts';


const PostList = () => {
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(getPostStatus)
  const postErrors = useSelector(getPostError)

  
  let content;
  if (postStatus === 'loading') {
    content = <p>Loading......</p>;
  }
  else if (postStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map(post => <PostExcepts key={post.id} post={post} />)
  }
  else if (postStatus === 'failed') {
    content = <p> {postErrors} </p>;
  }
   
    return (
    
    <div>
        <section>
                {content}
      </section>
    </div>
  )
}

export default PostList
