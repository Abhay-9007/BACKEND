import { useEffect, useState } from "react"
import axios from "axios"

function Feed(){
    

    const [post, setPost] = useState([
        {
            _id : "6a072c190e0f7b5e3f1591b1",
            image : "https://ik.imagekit.io/abhay9007/image_nEoZUmfyK.jpg",
            caption : "test_caption",
            __v : 0
        },
        {
            _id : "6a075be728c7aa5307c17e06",
            image : "https://ik.imagekit.io/abhay9007/image_qvUmKgsEp.jpg",
            caption : "test_caption2",
            __v : 0
        }
    ])
    // const data = axios.get("http://localhost:3000/posts")

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((res) => {
            // console.log(res.data)
            setPost(res.data.posts)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <h1 className="text-6xl font-bold text-red-500 bg-black text-center">Feed</h1>

            {   post.length > 0 ? (
                post.map((post) => {
                    return (
                        <div key={post._id} className="flex flex-col justify-center items-center p-5 bg-black text-white text-3xl">
                            <img 
                                className="h-100  border-white border-4"
                                src={post.image} 
                                alt={post.caption}
                            ></img>
                            <h1>{post.caption}</h1>
                        </div>
                    )
                })
            ) : (
                <h1 className="h-screen text-6xl font-bold text-red-500 bg-black text-center">No Posts</h1>
            )
            }

        </>
    )
}

export default Feed
