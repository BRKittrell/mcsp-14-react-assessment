import PostItems from "./PostItems"

const Posts = ({postProps, handleSetSinglePost}) => {
    return postProps.map((post) => (
        <PostItems postProps= {post} key = {post.id}
        handleSetSinglePost={handleSetSinglePost}/>
    ))
}

export default Posts

