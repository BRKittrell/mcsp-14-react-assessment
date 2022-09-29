import { useState, useEffect } from "react"
import Posts from "./Posts"
import Loading from "./Loading"
import axios from "axios"


const App = () => {
    
    // your stat should be: 
    // posts and loading. 
    // Use the useState hook to set the initial state
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    // use the useEffect hook to make an initial API call to the url: 
    useEffect(() => {
    async function getPosts(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data)
        setLoading(false)
    }
    getPosts()
}, [])
    // your components should be app, posts, postItem, and loading

    // conitionally render components so that if the app is loading, the loading component is renderd. If it is not loading and there are posts, the posts and in turn postItem components are renderd
    if(!loading){
        return <Posts postsProps = {posts}/>
    }else{
        return <Loading loaing={loading} />
    }

    // the end result is that you should be able to click on an individual post and console.log the id of that post. 

    return <h1>This is the app component. Read instructions in app.js.</h1>
}


export default App
