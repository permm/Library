
let posts = [];
const fetchPost = async () => {
    try {
        const res = await fetch('https://library-server-74wp.onrender.com/posts?_expand=user')
        if (res.status === 200) {
            return await res.json()
        }
        else console.log(res.status)
    }
    catch (err) {
        console.log(err)
    }
}

const createPost = async (data) => {
    data.postDate = new Date(Date.now())
    try {
        const res = await fetch('https://library-server-74wp.onrender.com/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return res.status
    }
    catch (err) {
        console.log(err)
    }
}

const updatePostById = async (id, data) => {
    try {
        const res = await fetch('https://library-server-74wp.onrender.com/posts/'+id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return res.status
    }
    catch (err) {
        console.log(err)
    }
}

const deletePostById = async (id) => {
    try {
        const res = await fetch('https://library-server-74wp.onrender.com/posts/'+id, {
            method: 'DELETE'
        })
        return res.status
    }
    catch (err) {
        console.log(err)
    }
}

const getPostById = async (id) => {
    try {
        const res = await fetch('https://library-server-74wp.onrender.com/posts/'+id+'?_expand=user')
        if (res.status === 200) {
            return await res.json()
        }
        else console.log(res.status)
    }
    catch (err) {
        console.log(err)
    }
}

const getPosts = async () =>{
 const  postdata = await fetchPost() 
 return  postdata 
}
export { fetchPost, getPosts, createPost, updatePostById, deletePostById, getPostById }