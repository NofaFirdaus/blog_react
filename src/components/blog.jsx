import { Link } from "react-router-dom"
import arrowDua from "../assets/arrow1.svg"
import { useState } from 'react'
import PropTypes from 'prop-types'



const BlogCard = ({ tanggalUpload,judul,artikel,foto,id}) => {
    // eslint-disable-next-line react/prop-types
    const [isHover, setHover] = useState("");

    const mouseEnter = () => {
        setHover("opacity-60 transition ease-in")
    }

    const mouseLeave = () => {
        setHover("transition ease-out")
    }

    return (
        <div className="overflow-hidden rounded-md ">
            <div  id="card" className=" h-max w-[19rem] text-slate-950  ">
                <div className={`${isHover} `} >
                    <img src={foto} alt="" />
                </div>
                <div className={`${isHover} flex flex-col gap-2  mt-[1rem] `}>
                    <p className={`font-medium  text-sm`}>{tanggalUpload}</p>
                    <h1 className={`text-base font-medium`}>{judul}</h1>

                    <p className={`line-clamp-2 text-xs h-[2rem]   text-wrap text-ellipsis overflow-hidden`}>{artikel}</p>
                </div>
                <div
                    onMouseEnter={() => mouseEnter()}
                    onMouseLeave={() => mouseLeave()}
                    className="mt-4">
                    <Link to={`/blog/${id}`} className="text-sm hover:opacity-100 opacity-70 transition ease-in hover:ease-out font-medium flex-row flex items-center gap-2">Selengkapnya
                        <img src={arrowDua} alt="" className="w-[1rem]" /></Link>

                </div>

            </div>
        </div>
    )
}
export default BlogCard
BlogCard.propTypes = {
    id: PropTypes.number.isRequired,
    judul: PropTypes.string.isRequired,
    artikel: PropTypes.string.isRequired,
    tanggalUpload: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired
    // Or if you know the type of elements in the array:
    // array: PropTypes.arrayOf(PropTypes.string).isRequired
}