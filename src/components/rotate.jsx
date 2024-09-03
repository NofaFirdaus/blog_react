import { useState } from 'react';
import plus from "../assets/+.svg";

export const RotatingImage = () => {
  const isiKonten = [
    {
      judul: "Apakah kursus ini benar-benar gratis?",
      artikel: "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan."
    },
    {
      judul: "Untuk siapa kursus ini?",
      artikel: "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan."
    },
    {
      judul: "Apakah kursus ini bersertifikat?",
      artikel: "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan."
    },
    {
      judul: "Sampai kapan kursus ini berakhir?",
      artikel: "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan."
    },
    {
      judul: "Apakah ada penyaluran kerja setelah lulus?",
      artikel: "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan."
    },
  ];

  const [rotatedIndex, setRotatedIndex] = useState(null);

  const handleClick = (index) => {
    setRotatedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className=" h-[20rem]  xl:w-[30rem]">
      {isiKonten.map((e, i) => (
        <div key={i} className="mb-[1rem]">
          <div className="relative flex flex-row">
            <p className="text-base text-port-gore-950 mr-2 font-semibold max-xl:text-xs">{i + 1}</p>
            <div className='max-xl:w-[85%]'>
              <h1 className="mb-[0.8rem] xl:text-base font-semibold max-xl:text-xs">{e.judul}</h1>
              <p className={`${rotatedIndex !== i ? 'hidden' : ''} mb-[2rem] text-xs text-wrap`}>{e.artikel}</p>
            </div>
            <div>
              <img
                onClick={() => handleClick(i)}
                className={`absolute right-[0] cursor-pointer h-[1.5rem] w-[1.5rem] transition-transform duration-300 ${rotatedIndex === i ? 'rotate-45' : ''}`}
                src={plus}
                alt=""
              />
            </div>
          </div>
          <hr className="justify-self-end" />
        </div>
      ))}
    </div>
  );
};
