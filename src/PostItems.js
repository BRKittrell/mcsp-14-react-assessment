
import axios from "axios"

const PostItems = ({postProps, handleSignlePostProp}) => {
    const handleOnClick = async (e) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`)
        console.log(e.target.id)
    }
    // return (
    //     <h1 onClick={handleOnClick} id={postProps.id}>{postProps.title}</h1>
    // )
}
export default PostItems