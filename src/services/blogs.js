import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'

const getBlogs = async () => {
    const response = await axios.get(baseUrl)

    return response.data
}

const getBlogById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)

    return response.data
}

const createBlog = async (newBlog) => {
    const response = await axios.post(baseUrl, newBlog)

    return response.data
}

const editBlog = async (newBlog) => {
    const response = await axios.patch(`${baseUrl}/${newBlog.id}`, newBlog)

    return response.data
}

const deleteBlog = async (blogId) => {
    await axios.delete(`${baseUrl}/${blogId}`)
}

const blogServices = {
    getBlogs,
    getBlogById,
    createBlog,
    editBlog,
    deleteBlog
}

export default blogServices