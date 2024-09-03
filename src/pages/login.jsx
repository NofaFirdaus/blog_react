import ButtonForm from "../components/buttonForm"
import imageLogin from "../assets/woman-writing-on-paper-3228878.png"
import { Link } from 'react-router-dom';
import { AsideForm } from "../components/formComponentAside";
const Login = () => {
    return (
        <section className="flex flex-row h-screen w-screen " >
            <AsideForm src={imageLogin} />
            <div className="max-sm:py-[3rem] max-sm:px-[4rem] sm:py-[5rem] sm:px-[10rem] bg-port-gore-950 xl:w-[50%] max-xl:w-[100%]  text-slate-50 ">
                <form action="" className="flex flex-col gap-[2rem] ">
                    <h1 className="text-4xl font-Poppins font-semibold">Login</h1>
                    <p className="text-base">Persiapkan diri untuk masa depan yang penuh dengan bintang </p>
                    <div className="flex flex-col gap-[2rem] mt-7">
                        <input className="focus:ring-slate-50   focus:ease-in transition ease-out outline-none bg-none text-slate-50 px-8 h-[3.5rem] bg-port-gore-950 ring-2 ring-slate-50/15 rounded-md " type="text" placeholder="email" />
                        <input className="focus:ring-slate-50   focus:ease-in transition ease-out outline-none bg-none text-slate-50 px-8 h-[3.5rem] bg-port-gore-950 ring-2 ring-slate-50/15 rounded-md " type="password" placeholder="password" />
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className="text-slate-50/55">simpan info masuk</label>
                    </div>
                    <ButtonForm named="MASUK" ></ButtonForm>
                    <p >Belum mempunyai akun? <span className="font-semibold "><Link to="/register" className="hover:opacity-80 active:opacity-80  ease-out transition" >masuk</Link></span></p>
                </form>
            </div>
        </section>
    )
}
export default Login