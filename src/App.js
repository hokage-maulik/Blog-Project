
import './App.css';
import Comment from './Component/Comment';
import { Routes ,Route} from 'react-router-dom';
import Mainpage from './Component/Mainpage';
import Login from './Component/Login';
import Post from './Component/Post';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Mainpage/>} />
          <Route path='/post' element={<Post/>}/>
          <Route path='/comment/:postId' element={<Comment/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
    </div>
  );
}

export default App;
