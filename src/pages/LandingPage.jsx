import Navbar from "../components/navbar"
import CardLandingPage from "../components/cardKursus"
import { Link } from 'react-router-dom'
import AsideImg from "../assets/AsideImgLandingPage.png"
import fotoSatu from "../assets/Frame.svg"
import fotoDua from "../assets/2.svg"
import fotoTiga from "../assets/3.svg"
import fotoEmpat from "../assets/4.svg"
import fotoLima from "../assets/5.svg"
import fotoKontenSatu from "../assets/foto3.png"
import Register from "./register"
import { RotatingImage } from '../components/rotate'
import BlogLandingPageCard from '../components/blog'
import Footer from '../components/footer'
import arrowDua from "../assets/arrow1.svg"



const LandingPage = () => {
    

    const sectionKonten = {
        0: {
            fotokonten: fotoSatu,
            artikel: "Lorem"
        },
        1: {
            fotokonten: fotoDua,
            artikel: "Ipsum"
        },
        2: {
            fotokonten: fotoTiga,
            artikel: "DulAmet"
        },
        3: {
            fotokonten: fotoEmpat,
            artikel: "Sigma"
        },
        4: {
            fotokonten: fotoLima,
            artikel: "Skibidi"
        },
    }
    const keuntunganElearning = [
        {
            judul: "Kursus Gratis",
            artikel: "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu"
        },
        {
            judul: "Akses Selamanya",
            artikel: "Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru "
        },
        {
            judul: "Sertifikat dan Portofolio",
            artikel: "Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan"
        },
        {
            judul: "Grup Konsultasi",
            artikel: "Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan  dan kamu juga bisa mebuka diskusi baru "
        },
        {
            judul: "Belajar Lebih Terarah",
            artikel: "Kursus menyediakan kursus dari level dasar hingga expert sehingga semua  bisa belajar dengan  layanan yang kami sediakan"
        },
        {
            judul: "Instruktur Berpengalaman",
            artikel: "Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya"
        }
    ]


    return (
        <>
            <Navbar></Navbar>
            <main className="overflow-hidden font-Poppins scroll-smooth  " >
                <section id="awal" className="bg-port-gore-950 flex flex-col items-centers justify-center h-screen w-screen md:px-[4.5rem] max-md:px-[3rem]">
                    <div className="flex max-md:flex-col-reverse md:flex-row items-center  max-md:gap-8 md:gap-32">
                        <article className="text-slate-50 font-Poppins">
                            <h1 className="leading-relaxed font-semibold max-md:text-3xl md:text-5xl">Bangun dan Wujudkan Cita<br />Bersama EDUFREE</h1>
                            <p className="my-8 max-md:text-xs md:base">EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online
                                yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.</p>

                            <div className="flex flex-row   gap-4  ">
                                <button className="hover:bg-amber-400 transition hover:ease-in ease-out active:bg-amber-400 active:ease-in bg-amber-300 text-port-gore-950 font-semibold md:text-sm max-md:text-xs px-7 rounded-md max-md:h-[2.5rem] md:h-[3.5rem]" type="submit">Lihat Kursus</button>
                                <Link className="hover:opacity-80 active:opacity-80 transition ease-out flex flex-row items-center md:sm max-md:text-xs gap-1"><p>Lihat Alur Belajar</p><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 5.99992H1.5M10.6667 1.33325L16.5 5.99992L10.6667 1.33325ZM16.5 5.99992L10.6667 10.6666L16.5 5.99992Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </Link>
                            </div>
                        </article>
                        <aside>
                            <img className="md:-[20rem] md:w-[58rem] h-auto" src={AsideImg} alt="" />
                        </aside>
                    </div>
                </section>
                <section id="start" className="h-[20vh] bg-[#EEF4FA]  flex max-xl:flex-col items-center xl:flex-row xl:justify-between max-xl:justify-around md:px-[4.5rem] max-md:px-[3rem]">
                    <div className="flex  flex-row items-center justify-center gap-8">
                        <div>
                            <h1 className="font-semibold max-xl:text-xl xl:text-3xl">21.000+</h1>
                            <p className="opacity-85 max-xl:text-xs xl:text-sm">Siswa terdaftar</p>
                        </div>
                        <div>
                            <h1 className="font-semibold max-xl:text-xl xl:text-3xl">21.000+</h1>
                            <p className="opacity-85 max-xl:text-xs xl:text-sm">Instruktur Ahli</p>
                        </div>
                        <div>
                            <h1 className="font-semibold max-xl:text-xl xl:text-3xl">21.000+</h1>
                            <p className="opacity-85 max-xl:text-xs xl:text-sm">Kursus Gratis</p>
                        </div>
                    </div>

                    <div className="flex max-md:flex-wrap max-md:items-center max-md:justify-center max-sm:gap-3 sm:gap-8">
                        {Object.values(sectionKonten).map((e) => (
                            <div className="flex !flex-wrap gap-2 items-center justify-center font-semibold xl:text-2xl  max-md:text-xs" key={e.artikel}>
                                <img className=" max-md:w-4" src={e.fotokonten} alt="" />
                                <p>{e.artikel}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="w-screen md:px-[4.5rem] max-md:px-[3rem]">
                    <h1 className="max-xl:text-2xl xl:text-3xl text-center font-semibold w-full max-xl:mt-[4rem] xl:mt-[6rem]">Keuntungan Bergabung Dengan<br /> E-Learning EDUFREE</h1>
                    <div className=" flex flex-wrap justify-center gap-[42px] max-xl:mt-[3rem] xl:mt-[4rem] ">
                        {Object.values(keuntunganElearning).map((e, i) => (
                            <div key={e.judul} className="flex flex-col justify-center  gap-4 bg-[#F4F6FC]  p-8 w-[19.5rem] h-[15.5rem]">
                                <p className="font-semibold bg-indigo-950 rounded-md text-slate-50 w-[2rem] h-[2rem] text-center text-xl">{i}</p>
                                <h1 className="text-xl font-medium">{e.judul}</h1>
                                <p className="text-xs ">{e.artikel}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="tentangKami" className="max-md:my-[8rem] md:mt-[8rem] max-md:gap-8 flex max-md:flex-col-reverse md:flex-row justify-between w-screen md:px-[4.5rem] max-md:px-[3rem] items-center">
                    <article className="md:w-[29rem] text-wrap flex flex-col gap-4">
                        <p className="text-sm">Tentang Kami</p>
                        <h1 className="max-xl:text-2xl xl:text-3xl font-semibold">EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh</h1>
                        <p className="text-xs">Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan</p>
                    </article>
                    <aside>
                        <img src={fotoKontenSatu} alt="" />
                    </aside>
                </section>
                <section className="w-screen md:px-[4.5rem] max-md:px-[3rem]">
                    <div className="md:flex-row max-md:flex-col flex justify-between md:mt-[8rem] max-md:mt-[8rem] max-md:gap-4 mb-[2rem]">
                        <h1 className="max-xl:text-2xl xl:text-3xl font-semibold">Rekomendasi Kursus <br /> Untuk Kamu</h1>
                        <Link to="/kursus">
                            <button className="hover:bg-amber-400 transition hover:ease-in ease-out active:bg-amber-400 active:ease-in bg-amber-300 text-port-gore-950 font-semibold md:text-sm max-md:text-xs px-7 rounded-md h-[2.5rem]" type="submit">Lihat Semua</button>
                        </Link>
                    </div>
                    <hr className="border-t-2" />
                    <div className="max-md:flex-col items-center mt-[4rem] md:flex-row flex max-md:justify-center" >
                        <CardLandingPage />
                    </div>
                </section>

                <section id="faq" className="scroll-smooth h-[35vh] mt-[6rem] bg-[#EEF4FA]  flex  items-center xl:flex-row xl:justify-between max-xl:hidden md:px-[4.5rem] ">
                    <div>
                        <h1 className="max-xl:text-xl xl:text-2xl font-semibold">Kata Mereka Tentang Kursus EDUFREE</h1>
                        <p className="text-xs">EDUFREE telah dipercaya lebih dari <br />10.000 siswa </p>
                    </div>

                    <div className="text-wrap flex flex-col gap-8">
                        <h1 className="md:w-[834px] font-semibold text-xl opacity-85">&quot; Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta  responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!&quot;</h1>
                        <div className="flex-row flex items-center gap-2">
                            <img src="" className="bg-black h-[2rem] ring-1 ring-slate-950 w-[2rem] rounded-full" alt="" />
                            <div>
                                <h1 className="text-sm">Garok</h1>
                                <p className="text-xs">Ceo Sanskuy</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-xl:my-[4rem] xl:my-[8rem] max-xl:gap-8 flex max-xl:flex-col xl:flex-row justify-between w-screen xl:px-[4.5rem] max-xl:px-[3rem]   ">
                    <div>
                        <h1 className="max-xl:text-xl xl:text-2xl font-semibold" >Frequently Asked Questions</h1>
                        <p className="text-xs">Masih bingung atau ragu? Hubungi kami<br />di nomor  +6288 999 222 333</p>
                    </div>
                    <RotatingImage />
                </section>
                <Register />
                {/* BLOG */}
                <section id="end" className="w-screen  md:px-[4.5rem] max-md:px-[3rem] mt-[6rem]">
                    <div className="max-lg:mb-[2.5rem] flex lg:flex-row max-lg:flex-col max-lg:gap-[0.4rem]  lg:justify-between mb-[2rem]">
                        <h1 className="max-xl:text-2xl  xl:text-3xl font-semibold">Blog, Berita dan Event</h1>
                        <Link className="flex-row flex  hover:ease-in transition hover:opacity-50 items-center gap-3  opacity-85 text-slate-950 text-xs">Lihat Semua <img src={arrowDua} alt="" className="w-[0.9rem]" /></Link>
                    </div>
                    <BlogLandingPageCard />
                </section>
            </main >
            <Footer />
        </>
    )

}
export default LandingPage
