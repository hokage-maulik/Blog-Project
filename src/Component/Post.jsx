// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';

// // export default function Post() {
// //     const [state, setState] = useState([]);
// //     const [post, setPost] = useState({ postimage: "", postdescription: "" });
// //     const [editPost, setEditPost] = useState(null);

// //     useEffect(() => {
// //         fetchData();
// //     }, []);

// //     const fetchData = () => {
// //         axios.get("http://localhost:8005/post/get")
// //             .then((res) => {
// //                 setState(res.data);
// //             })
// //             .catch((error) => {
// //                 console.log(error);
// //             });
// //     };

// //     const handleChange = (e) => {
// //         setPost({ ...post, [e.target.name]: e.target.value });
// //     };

// //     const addPost = () => {
// //         axios.post("http://localhost:8005/post/add", post)
// //             .then(() => {
// //                 fetchData();
// //                 setPost({ postimage: "", postdescription: "" });
// //             })
// //             .catch((error) => {
// //                 console.log(error);
// //             });
// //     };

// //     const updatePost = () => {
// //         axios.patch(`http://localhost:8005/post/update/${editPost._id}`, post)
// //             .then(() => {
// //                 fetchData();
// //                 setEditPost(null);
// //                 setPost({ postimage: "", postdescription: "" });
// //             })
// //             .catch((error) => console.log(error));
// //     };

// //     const deletePost = (id) => {
// //         axios.delete(`http://localhost:8005/post/delete/${id}`)
// //             .then(() => fetchData())
// //             .catch((error) => console.log(error));
// //     };

// //     return (
// //         <div>
// //             <input
// //                 type="text"
// //                 name="postdescription"
// //                 value={post.postdescription}
// //                 onChange={handleChange}
// //                 placeholder="Enter post description"
// //             />

// //             <input
// //                 type="text"
// //                 name="postimage"
// //                 value={post.postimage}
// //                 onChange={handleChange}
// //                 placeholder="Enter image URL"
// //             />

// //             {editPost ? (
// //                 <button onClick={updatePost} className="bg-blue-500 text-black px-4 py-2 rounded">Update Post</button>
// //             ) : (
// //                 <button onClick={addPost} className="bg-green-500 text-black px-4 py-2 rounded">Add Post</button>
// //             )}

// //             {state.map((el, i) => (
// //                 <div  style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
                    
// //                      {el.postimage && <img src={el.postimage} alt="Post" style={{ height: "200px", width: "" }} />}
// //                     <button> <Link to={`/comment/${el._id}`}>Add Comment </Link></button>
// //                     <h3>{el.postdescription}</h3>
// //                     <button onClick={() => setEditPost(el)}>Edit</button>
// //                     <button onClick={() => deletePost(el._id)}>Delete</button>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // }



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import '../Style/Post.css'

// export default function Post() {
//   const [state, setState] = useState([]);
//   const [post, setPost] = useState({ postimage: "", postdescription: "" });
//   const [editPost, setEditPost] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get("https://blog-backend-smu6.onrender.com/post/get")
//       .then((res) => {
//         setState(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleChange = (e) => {
//     setPost({ ...post, [e.target.name]: e.target.value });
//   };

//   const addPost = () => {
//     axios
//       .post("https://blog-backend-smu6.onrender.com/post/add", post)
//       .then(() => {
//         fetchData();
//         setPost({ postimage: "", postdescription: "" });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const updatePost = () => {
//     axios
//       .patch(`https://blog-backend-smu6.onrender.com/post/update/${editPost._id}`, post)
//       .then(() => {
//         fetchData();
//         setEditPost(null);
//         setPost({ postimage: "", postdescription: "" });
//       })
//       .catch((error) => console.log(error));
//   };

//   const deletePost = (id) => {
//     axios
//       .delete(`https://blog-backend-smu6.onrender.com/post/delete/${id}`)
//       .then(() => fetchData())
//       .catch((error) => console.log(error));
//   };

//   return (
//         <>
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h2 className="text-xl font-semibold mb-4">
//           {editPost ? "Edit Post" : "Add New Post"}
//         </h2>

//         <input
//           type="text"
//           name="postdescription"
//           value={post.postdescription}
//           onChange={handleChange}
//           placeholder="Enter post description"
//           className="w-full p-2 border rounded-lg mb-3"
//         />

//         <input
//           type="text"
//           name="postimage"
//           value={post.postimage}
//           onChange={handleChange}
//           placeholder="Enter image URL"
//           className="w-full p-2 border rounded-lg mb-3"
//         />

//         {editPost ? (
//           <button
//             onClick={updatePost}
//             className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded-lg w-full"
//           >
//             Update Post
//           </button>
//         ) : (
//           <button
//             onClick={addPost}
//             className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg w-full"
//           >
//             Add Post
//           </button>
//         )}
//       </div>

//       <div className="d-flex flex-wrap gap-4 justify-center">
//         {state.map((el, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-lg shadow-md overflow-hidden w-60"
//           >
//             {el.postimage && (
//               <img
//                 src={el.postimage}
//                 alt="Post"
//                 style={{height:"450px",width:"700px"}}
//               />
//             )}
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{el.postdescription}</h3>

//               <div className="mt-4 flex justify-between">
//                 <button
//                   onClick={() => setEditPost(el)}
//                   className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => deletePost(el._id)}
//                   className="bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded-lg"
//                 >
//                   Delete
//                 </button>

//                 <Link
//                   to={`/comment/${el._id}`}
//                   className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded-lg"
//                 >
//                   Add Comment
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
      // </div>
//     </div>
//       </>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Style/Post.css'

export default function Post() {
  const [state, setState] = useState([]);
  const [post, setPost] = useState({ postimage: "", postdescription: "" });
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://blog-backend-smu6.onrender.com/post/get")
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const addPost = () => {
    axios
      .post("https://blog-backend-smu6.onrender.com/post/add", post)
      .then(() => {
        fetchData();
        setPost({ postimage: "", postdescription: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updatePost = () => {
    axios
      .patch(`https://blog-backend-smu6.onrender.com/post/update/${editPost._id}`, post)
      .then(() => {
        fetchData();
        setEditPost(null);
        setPost({ postimage: "", postdescription: "" });
      })
      .catch((error) => console.log(error));
  };

  const deletePost = (id) => {
    axios
      .delete(`https://blog-backend-smu6.onrender.com/post/delete/${id}`)
      .then(() => fetchData())
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container py-5">
        <div className="bg-white p-4 rounded shadow mb-5">
          <h2 className="h4">{editPost ? "Edit Post" : "Add New Post"}</h2>
          <input
            type="text"
            name="postdescription"
            value={post.postdescription}
            onChange={handleChange}
            placeholder="Enter post description"
            className="form-control mb-3"
          />
          <input
            type="text"
            name="postimage"
            value={post.postimage}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="form-control mb-3"
          />

          {editPost ? (
            <button
              onClick={updatePost}
              className="btn btn-primary w-100"
            >
              Update Post
            </button>
          ) : (
            <button
              onClick={addPost}
              className="btn btn-success w-100"
            >
              Add Post
            </button>
          )}
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {state.map((el, i) => (
            <div key={i} className="col">
              <div className="card h-100">
                {el.postimage && (
                  <img
                    src={el.postimage}
                    alt="Post"
                    className="card-img-top img-fluid" 
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{el.postdescription}</h5>

                  <div className="d-flex justify-content-between mt-3">
                    <button
                      onClick={() => setEditPost(el)}
                      className="btn btn-warning btn-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deletePost(el._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/comment/${el._id}`}
                      className="btn btn-info btn-sm"
                    >
                      Add Comment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
