import ButtonForm from "../components/buttonForm"
import imageRegister from "../assets/foto2.png"
import { Link } from 'react-router-dom';
import { AsideForm } from "../components/formComponentAside";
import { useState } from "react";
const Register = () => {
    const [isText , setText] = useState(false)
    // const handleText =()=>{
    //     setText(true)
    // }

    return (
        <section className="flex flex-row h-screen w-screen " >
            <AsideForm src={imageRegister} />
            <div className="max-sm:py-[3rem] max-sm:px-[4rem] sm:py-[5rem] sm:px-[10rem] bg-port-gore-950 xl:w-[50%] max-xl:w-[100%] text-slate-50 ">
                <form action="" className="flex flex-col gap-[2rem] ">
                    <h1 className="text-4xl font-Poppins font-semibold">Register</h1>
                    <p className="text-base">Persiapkan diri untuk masa depan yang penuh dengan bintang </p>
                    <div className="flex flex-col gap-[2rem] mt-7">
                        <input name="name" className="focus:ring-slate-50   focus:ease-in transition ease-out outline-none bg-none text-slate-50 px-8 h-[3.5rem] bg-port-gore-950 ring-2 ring-slate-50/15 rounded-md " type="text" placeholder="name" />
                        <input name="username" className="focus:ring-slate-50   focus:ease-in transition ease-out outline-none bg-none text-slate-50 px-8 h-[3.5rem] bg-port-gore-950 ring-2 ring-slate-50/15 rounded-md " type="text" placeholder="username" />
                        <input name="email" className="focus:ring-slate-50   focus:ease-in transition ease-out outline-none bg-none text-slate-50 px-8 h-[3.5rem] bg-port-gore-950 ring-2 ring-slate-50/15 rounded-md " type="email" placeholder="email" />
                        <div className="relative ">
                            <input  name="password" className=" focus:ring-slate-50   focus:ease-in transition ease-out outline-none bg-none text-slate-50 px-8 w-full h-[3.5rem] bg-port-gore-950 ring-2 ring-slate-50/15 rounded-md "  type={isText ? 'text':'password' } placeholder="password" />
                            {isText ? <svg onClick={()=>{setText(false)}} className="cursor-pointernpm run dev
                             w-6 h-6 absolute translate-y-[-50%] top-[50%] right-[12px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg> 
                            :  
                            <svg onClick={()=>{setText(true)}} className="cursor-pointernpm run dev
                             w-6 h-6 text-gray-800 dark:text-white absolute translate-y-[-50%] top-[50%] right-[12px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                          </svg>
                          
                            }
                            

                        </div>
                    </div>

                    <ButtonForm named="MASUK" ></ButtonForm>
                    <p>Sudah punya akun? <span className="font-semibold "><Link className="hover:opacity-80 active:opacity-80  ease-out transition" to="/login" >masuk</Link></span></p>
                </form>
            </div>
        </section>
    )
}
export default Register