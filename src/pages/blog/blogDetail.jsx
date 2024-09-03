import { useParams } from 'react-router-dom'
const BlogDetail = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}
export default BlogDetail