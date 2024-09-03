// eslint-disable-next-line react/prop-types
export const AsideForm = ({src}) => {
    return (
        <div className="w-[50%] relative xl:block max-xl:hidden">
            <div className="absolute h-full w-full bg-port-gore-950/55 z-10 p-[5rem]">
                <h1 className="font-Poppins font-semibold text-slate-50 text-5xl">Selangkah Lebih Dekat Dengan Impianmu</h1>
                <p className="font-Poppins text-slate-50 mt-7">Sebuah layanan E-Learning gratis yang siap
                    <br /> membantumu menjadi seorang ahli </p>
            </div>
            <img src={src} className="absolute h-full w-full" alt="" />

        </div>
    )
}

