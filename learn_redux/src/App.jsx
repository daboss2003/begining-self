import './App.css'
import PostList from './features/posts/PostList'
import AddPost from './features/posts/AddPost'
import SinglePostPage from './features/posts/SinglePostPage';
import EditPost from './features/posts/EditPost';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path='post'>
          <Route index element={<AddPost />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPost />} />
        </Route>
      
      </Route>
    </Routes>
  )
}

export default App
