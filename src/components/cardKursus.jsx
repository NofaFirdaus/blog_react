import fotoTutorialSatu from "../assets/unsplash_m_HRfLhgABo.png"
import jam from "../assets/jam.svg"
import play from "../assets/playVideo.svg"
import Peoples from "../assets/Peoples.svg"
import bintang from "../assets/bintang.svg"
import { Link } from "react-router-dom"




// eslint-disable-next-line react/prop-types
const CardKursus = ({id}) => {
    const informasi = [
        {
            icon: jam,
            artikel: "4,5 Jam"
        },
        {
            icon: play,
            artikel: "20 Video",
        },
        {
            icon: Peoples,
            artikel: "1.900 Siswa"
        }
    ]


    return (
        <Link to={`/kursus/${id}`}>
            <div id="card" className="hover:opacity-70 transition hover:ease-in ease-out h-max w-[19rem] rounded-md   overflow-hidden">
                <div className="relative">
                    <div className="absolute py-[2px] px-2 flex flex-row bottom-[-12px] right-2 gap-2 bg-indigo-950 rounded-xl justify-center items-center">
                        <img className="h-[14px] w-[14px]" src={bintang} alt="" />
                        <p className="text-center font-medium text-[12px] text-slate-50">4.9</p>
                    </div>
                    <img src={fotoTutorialSatu} alt="" />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <h1 className="text-xl font-semibold">Dasar Pemrograman WEB </h1>
                    <p className="text-xs h-[4rem]  opacity-80">Materi pembelajarn mengenai pembuatan website tingkat pemula</p>
                    <div className="flex-row flex mt-2 justify-between ">
                        {Object.values(informasi).map((e, i) => (
                            <div className="flex flex-row gap-1" key={i}>
                                <img className="w-[1rem]" src={e.icon} alt="" />
                                <p className="text-sm">{e.artikel}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CardKursus