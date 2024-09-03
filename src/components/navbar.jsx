import { Link,useNavigate } from "react-router-dom";
import listSvg from "../assets/list.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isHidden, setHidden] = useState(true);
    const [isNavbarVisible, setNavbarVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const navigate = useNavigate();

    const handleFaqClick = () => {
        navigate('/');
    }

    const handleHidden = () => {
        setHidden(prevState => !prevState);
    };
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            const section2 = document.getElementById("start");
            const section2Top = section2 ? section2.getBoundingClientRect().top + window.scrollY : 0;

            if (currentScrollTop < lastScrollTop) {
                // Scroll ke atas
                setNavbarVisible(true);
            } else {
                // Scroll ke bawah
                if (currentScrollTop >= section2Top) {
                    // Di section 2 atau lebih jauh
                    setNavbarVisible(false);
                } else {
                    // Di section 1 atau sebelum section 2
                    setNavbarVisible(true);
                }
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Untuk mencegah nilai negatif
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);
    useEffect(() => {
        if (!isHidden) {
            // Menambahkan kelas overflow-hidden ke elemen body ketika menu terbuka
            document.body.classList.add('max-md:overflow-hidden');
        } else {
            // Menghapus kelas overflow-hidden dari elemen body ketika menu tertutup
            document.body.classList.remove('max-md:overflow-hidden');
        }

        // Membersihkan efek ketika komponen dilepas
        return () => {
            document.body.classList.remove('max-md:overflow-hidden');
        };
    }, [isHidden]);

    return (
        <header className={`bg-port-gore-950 w-screen z-50 fixed top-0 h-[4rem] transition-transform duration-300 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="flex flex-row justify-between h-full w-full items-center max-md:px-[1.5rem] md:px-[4.5rem] text-slate-50">
                <div className="flex gap-2 cursor-pointer items-center">
                    <button onClick={handleHidden}
                        className="active:bg-white/10 transition ease-out active:ease-in rounded-full p-1">
                        <img
                            className="  h-auto md:hidden w-[2rem]"
                            src={listSvg}
                            alt="Menu"
                        />
                    </button>
                    <h1 className="font-semibold text-2xl">Logo</h1>
                </div>
                <ul className="flex flex-row items-center gap-8 cursor-pointer text-sm">
                    <li className="max-md:hidden hover:opacity-40 transition ease-out hover:ease-in"><Link to="/">HOME</Link></li>
                    <li className="max-md:hidden hover:opacity-40 transition ease-out hover:ease-in"><a href="#tentangKami" onClick={handleFaqClick}>TENTANG KAMI</a></li>
                    <li className="max-md:hidden hover:opacity-40 transition ease-out hover:ease-in"><Link to="/kursus">KURSUS</Link></li>
                    <li className="max-md:hidden hover:opacity-40 transition ease-out hover:ease-in"><a href="#faq" onClick={handleFaqClick} >FAQ</a></li>
                    <li className="max-md:hidden hover:opacity-40 transition ease-out hover:ease-in"><Link to="/blog" >BLOG</Link></li>
                    <li>
                        <Link to="/login" className="hover:text-port-gore-950 hover:bg-slate-50 transition ease-out hover:ease-in ring-[1px] ring-slate-50 max-md:py-3 max-md:px-5 md:py-3 md:px-8 rounded-md">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`${isHidden ? "hidden" : "block"}   top-0 absolute z-40 h-screen w-screen md:hidden`}>
                <div onClick={handleHidden} className={`bg-black/60   h-screen w-screen absolute md:hidden z-20 `}></div>
                <div className={` flex flex-col h-screen absolute w-[50%] z-30 bg-port-gore-950  md:hidden`}>
                    <div className="items-center  px-3 justify-between mt-3  flex">
                        <h1 className="font-semibold text-2xl text-white">Logo</h1>
                        <button onClick={handleHidden}
                            className=" self-end active:bg-white/10 transition ease-out active:ease-in rounded-full p-1">
                            <img
                                className="  h-auto md:hidden w-[2rem]"
                                src={listSvg}
                                alt="Menu"
                            />
                        </button>
                    </div>

                    <ul className="flex flex-col items-center gap-8 mt-10 text-slate-50 text-sm">
                        <li className="hover:opacity-40 transition ease-out hover:ease-in"><Link to="/">HOME</Link></li>
                        <li className="hover:opacity-40 transition ease-out hover:ease-in"><a href="#tentangKami" onClick={handleFaqClick}>TENTANG  KAMI</a></li>
                        <li className="hover:opacity-40 transition ease-out hover:ease-in"><Link to="/kursus">KURSUS</Link></li>
                        <li className="hover:opacity-40 transition ease-out hover:ease-in"><a href="#faq" onClick={handleFaqClick} >FAQ</a></li>
                        <li className="hover:opacity-40 transition ease-out hover:ease-in"><Link to="/blog">BLOG</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
