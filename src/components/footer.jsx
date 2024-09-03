import { Link } from 'react-router-dom'
const Footer = () => {
    const asset = [
        {
            Judul: "Sosial Media",
            artikel: ["Instagram", "Twitter", "LinkedIn"]
        },
        {
            Judul: "Program",
            artikel: ["Merdeka Belajar", "Finterpreneur"]
        },
        {
            Judul: "DUKUNGAN",
            artikel: ["Tentang Kami", "Ketentuan", "Kebijakan Privasi"]
        }
    ]
    return (
        <footer className="relative text-slate-50 md:px-[4.5rem] max-md:px-[3rem] max-xl:mt-[3rem] xl:mt-[6rem] max-xl:h-max xl:h-[20vh] bg-port-gore-950 flex max-xl:flex-col pt-[1.5rem] xl:flex-row xl:justify-between max-xl:gap-[3rem]">
            <div className=" flex flex-col ">
                <h1 className="font-semibold text-2xl">Logo</h1>
                <p className="text-xs font-light">Bangun dan wujudkan cita bersama edufree</p>
            </div>
            <div className="flex flex-row max-xl:justify-between xl:gap-[2rem]">
                {asset.map((kategori, i) => (
                    <div key={i}>
                        <p className="max-xl:text-sm font-semibold mb-[1rem] xl:text-base">{kategori.Judul}</p>
                        <ul>
                            {kategori.artikel.map((artikel) => (
                                <li className="font-light xl:text-sm max-xl:text-xs hover:opacity-40 ease-in transition active:opacity-40" key={artikel}><Link>{artikel}</Link></li>
                            ))}
                        </ul>
                    </div>
                ))}
                
            </div>
            <div className="flex-row flex gap-[1.5rem] p-[1rem] rounded-t-md !text-slate-950 bg-[#FCD980] xl:absolute xl:bottom-[0px]">
                    <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-xs font-light">contact@website.com</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Telephone</p>
                        <p className="text-xs font-light">+6288 999 222 333</p>
                    </div>
                </div>
        </footer>
    )
}
export default Footer