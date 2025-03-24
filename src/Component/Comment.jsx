// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// export default function Comment() {

//     const[state,setState]=useState([])
//     const {postId}=useParams()

//     useEffect(()=>{
//       fetchdata()
//     },[])
//     const fetchdata=()=>{
//       axios.get(`http://localhost:8005/comment/get/?postId=${postId}`)
//       .then((res)=>{
//         setState(res.data)
//       })
//       .catch((error)=>{
//         console.log(error)
//       })
//     }

//   return (
//     <div>
//         {state.map((el,i)=>{
//             return <>
//                <h3>{el.comment}</h3>
//             </>
//         })}
//     </div>
//   )
// }
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Comment() {
  const [state, setState] = useState([]);
  const [newComment, setNewComment] = useState(""); 
  const { postId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://blog-backend-smu6.onrender.com/comment/get/?postId=${postId}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addComment = () => {

    axios
      .post("https://blog-backend-smu6.onrender.com/comment/add", {
        postId: postId,
        comment: newComment,
      })
      .then(() => {
        setNewComment(""); 
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      <div className="flex mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-grow p-2 border rounded-lg"
        />
        <button
          onClick={addComment}
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        
         {state.map((el,i)=>{
          return <>
             <h3>{el.comment}</h3>
          </>
         })}
      </div>
    </div>
  );
}
