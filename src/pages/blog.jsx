import BlogCard from "../components/blog";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import FormSearchAndSort from "../components/searchBlog&Kursus"
import { useState } from "react"
import fotodua from "../assets/unsplash_m_HRfLhgABo.png"

const Blog = () => {
    const informasiBlog = [
        {
            tanggalUpload: "2 Agustus 2024 ",
            judul: "Cara Mudah Untuk Memulai Belajar Programming - EDUFREE ",
            artikel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae sint quia animi saepe obcaecati magnam placeat, nam architecto quisquam inventore deleniti. Voluptatibus accusantium quisquam molestias eos ullam ipsum aliquid.",
            foto: fotodua
        },
        {
            tanggalUpload: "2 Agustus 2024 ",
            judul: "Cara Mudah Untuk Memulai Belajar Programming - EDUFREE ",
            artikel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae sint quia animi saepe obcaecati magnam placeat, nam architecto quisquam inventore deleniti. Voluptatibus accusantium quisquam molestias eos ullam ipsum aliquid.",
            foto: fotodua
        },
        {
            tanggalUpload: "2 Agustus 2024 ",
            judul: "Cara Mudah Untuk Memulai Belajar Programming - EDUFREE ",
            artikel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae sint quia animi saepe obcaecati magnam placeat, nam architecto quisquam inventore deleniti. Voluptatibus accusantium quisquam molestias eos ullam ipsum aliquid.",
            foto: fotodua
        },
        {
            tanggalUpload: "2 Agustus 2024 ",
            judul: "Cara Mudah Untuk Memulai Belajar Programming - EDUFREE ",
            artikel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae sint quia animi saepe obcaecati magnam placeat, nam architecto quisquam inventore deleniti. Voluptatibus accusantium quisquam molestias eos ullam ipsum aliquid.",
            foto: fotodua
        },
        {
            tanggalUpload: "2 Agustus 2024 ",
            judul: "Cara Mudah Untuk Memulai Belajar Programming - EDUFREE ",
            artikel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae sint quia animi saepe obcaecati magnam placeat, nam architecto quisquam inventore deleniti. Voluptatibus accusantium quisquam molestias eos ullam ipsum aliquid.",
            foto: fotodua
        },
        {
            tanggalUpload: "2 Agustus 2024 ",
            judul: "Cara Mudah Untuk Memulai Belajar Programming - EDUFREE ",
            artikel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae sint quia animi saepe obcaecati magnam placeat, nam architecto quisquam inventore deleniti. Voluptatibus accusantium quisquam molestias eos ullam ipsum aliquid.",
            foto: fotodua
        },


    ]
    const kategori = [
        "Semua",
        "Tips & Tricks",
        "Event",
        "Berita",
        "Soft Skill",
        "Hard Skill",
        "Tutorial"
    ]
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }
    return (
        <>
            <Navbar />
            <main >
                <FormSearchAndSort
                    kategori={kategori}
                    selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                    placeholder="Cari Blog, Event atau Berita ..."
                />
                <section className="h-[120vh]  justify-center items-center md:px-[4rem] py-[6rem] max-md:px-[3rem]">
                    <div className="overflow-y-auto overflow-hidden h-full  max-md:justify-center flex flex-wrap gap-[3.9%]">
                        {Object.values(informasiBlog).map(({ tanggalUpload, judul, artikel, foto }, i) => (
                            <BlogCard
                                id={i}
                                key={judul}
                                tanggalUpload={tanggalUpload}
                                judul={judul}
                                artikel={artikel}
                                foto={foto}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Blog