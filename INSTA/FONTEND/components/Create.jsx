import axios from "axios"
import { useNavigate } from "react-router-dom"

function Create(){

    const navigate = useNavigate()

    const handleSubmit = async (e)=> {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post(
            "http://localhost:3000/create-post",
            formData
        )
        .then((res)=>{
            // console.log(res.data)
            // e.target.reset()
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
            alert("Post Creation Failed...")
        })
    }

    return (
        <section className="text-white h-screen bg-black">

            <h1 className="text-6xl font-bold text-red-500 text-center p-10">
                Feed
            </h1>

            <form
                className="flex flex-col justify-center items-center py-40"
                onSubmit={handleSubmit}
            >

                <input
                    accept="image/*"
                    name="image"
                    type="file"
                    className="bg-red-500 p-10 border-4 border-white rounded-full"
                />

                <input
                    name="caption"
                    type="text"
                    placeholder="Enter Caption Here..."
                    className="p-5 m-10 text-2xl"
                />

                <button
                    type="submit"
                    className="border-4 rounded-full bg-green-500 p-1 px-5"
                >
                    Post
                </button>

            </form>
        </section>
    )
}

export default Create




// import axios from "axios"

// function Create(){

//     const handleSubmit = async (e)=> {
//         e.preventDefault()

//         const formData = new FormData(e.target)

//         axios.post("http://localhost:3000/create-post", formData)
//         .then((res) => {
//             // alert("Post Created Successfully...")
//             // e.target.reset()
//             console.log(res)
//         })
//         .catch((err) => {
//             console.log(err)
//             alert("Post Creation Failed...")
//         })
//     }

//     return (
//         <>
//             <section className=" text-white h-screen bg-black">
//                 <h1 className="text-6xl font-bold text-red-500 bg-black text-center p-10">Feed</h1>
//                 <form className="flex flex-col justify-center items-center py-40"
//                 onSubmit={handleSubmit}>
//                 <input 
//                     placeholder="Enter Image Here...."
//                     type="file"
//                     className="bg-red-500 p-10 border-4 border-white rounded-full"
//                 ></input>
//                 <input 
//                     className="p-5 m-10 text-2xl"
//                     placeholder="Enter Caption Here..."
//                     type="text"
//                 ></input>
//                 <button type="submit" className="border-4 rounded-full bg-green-500 p-1 px-5 hover:bg-green-300">Post</button>
//                 </form>
//             </section>
//         </>
//     )
// }

// export default Create
