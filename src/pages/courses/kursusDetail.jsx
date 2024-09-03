import { useParams } from 'react-router-dom'
const KursusDetail = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}
export default KursusDetail