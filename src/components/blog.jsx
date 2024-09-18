import { Link } from "react-router-dom"
import arrowDua from "../assets/arrow1.svg"
import {  useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'


// eslint-disable-next-line react/prop-types
const BlogCard = ({ error,loading,categoryBlogs, slug, title, body, created_at, foto }) => {
    // eslint-disable-next-line react/prop-types
    const [isHover, setHover] = useState(false);
    // const category = {
    //     'name' : categoryBlogs 
    // }
    const mouseEnter = () => {
        setHover(true)
    }

    const mouseLeave = () => {
        setHover(false)
    }
    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Error</h1>
    return (
        <div className={`${isHover ? 'ring-1 ring-slate-950/10' : 'transition ease-out'} transition ease-in p-1 overflow-hidden rounded-md`}  >
            <div id="card" className=" h-full   w-[19rem] text-slate-950  ">
                <div className={`${isHover ? 'opacity-60 transition ease-in' : 'transition ease-out'} `} >
                    <img src={foto} alt="" />
                </div>
                <div className={`${isHover ? 'opacity-60 transition ease-in' : 'transition ease-out'} flex flex-col gap-2  mt-[1rem] `}>
                    <div className="flex justify-between mb-2">
                        <div className=" bg-green-400/30 text-green-600 ring-1 ml-[1px] ring-green-600 h-[1.5rem]  w-[5rem] flex justify-center items-center rounded-md">
                            <p className={`font-medium  text-xs `}>{categoryBlogs}</p>
                        </div>
                        <p className={`font-medium  text-sm`}>{moment(created_at).fromNow()}</p>
                    </div>
                    <h1 className={`  h-[3rem]  text-base text-wrap line-clamp-2 text-ellipsis overflow-hidden font-medium`}>{title}</h1>

                    <p className={`line-clamp-2 text-xs h-[2rem]  text-wrap text-ellipsis overflow-hidden`}>{body}</p>
                </div>
                <div
                    onMouseEnter={() => mouseEnter()}
                    onMouseLeave={() => mouseLeave()}
                    className="mt-4">
                    <Link to={`/blog/${slug}`} className="text-sm hover:opacity-100 opacity-70 transition ease-in hover:ease-out font-medium self-end flex-row flex items-center gap-2">Selengkapnya
                        <img src={arrowDua} alt="" className="w-[1rem]" /></Link>

                </div>

            </div>
        </div>
    )
}
export default BlogCard
BlogCard.propTypes = {
    id: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    created_at: PropTypes.any.isRequired,
    slug: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired
    // Or if you know the type of elements in the array:
    // array: PropTypes.arrayOf(PropTypes.string).isRequired
}