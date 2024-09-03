import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CardKursus from "../components/cardKursus";
import FormSearchAndSort from "../components/searchBlog&Kursus";

const Kursus = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#faq') {
            const faqSection = document.getElementById('faq');
            if (faqSection) {
                faqSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    const kategori = [
        "Semua",
        "UI Design",
        "Programming",
        "Marketing",
        "Soft Skill",
        "Network",
        "Data Analyst"
    ]
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    }
    const renderCardKursus = () => {
        const cards = [];
        for (let index = 0; index < 8; index++) {
            cards.push(<CardKursus id={index} key={index} />);
        }
        return cards;
    };

    return (
        <>
            <Navbar />
            <main className="mt-[4rem] font-Poppins" >
                <FormSearchAndSort
                    kategori={kategori}
                    selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                    placeholder="cari kursus..."
                />
                <section className="h-[120vh]  justify-center items-center md:px-[4rem] py-[6rem] max-md:px-[3rem]">
                    <div className="overflow-y-auto overflow-hidden h-full  max-md:justify-center items-center flex flex-wrap gap-[3.9%]">
                        {renderCardKursus()}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Kursus;
