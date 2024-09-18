import BlogCard from "../components/blog"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import FormSearchAndSort from "../components/searchBlog&Kursus"
import { useState, useEffect } from "react"
import fotodua from "../assets/unsplash_m_HRfLhgABo.png"
import axios from 'axios'


const Blog = () => {
  const [dataBlog, setDataBlog] = useState({})
  const [dataCategory, setDataCategory] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const [startPage, setStartPage] = useState(1)
  const pageLimit = 4

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/blogs?page=${currentPage}`)
      .then((response) => {
        setDataBlog(response.data.data)
        setLastPage(response.data.last_page)
        console.log(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [currentPage])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/category')
      .then((response) => {
        setDataCategory(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })

  }, [])

  const [selectedCategory, setSelectedCategory] = useState("Progamming")

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handlePageClick = (page) => {
    setCurrentPage(page)

    if (page === startPage + pageLimit - 1 && page < lastPage) {
      setStartPage(page)
    }
  }

  const handleNextPageSet = () => {
    if (currentPage < lastPage) {
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)

      if (nextPage === startPage + pageLimit && nextPage < lastPage) {
        setStartPage(nextPage - 1)
      }
    }
  }
  const handleEndPageSet = () => {
    setCurrentPage(lastPage)
    const newStartPage = Math.max(lastPage - pageLimit + 1, 1);
    setStartPage(newStartPage);
  }

  const handleStartPageSet = () => {
    setCurrentPage(1)
    setStartPage(1)
  }


  const handlePrevPageSet = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1
      setCurrentPage(prevPage)

      if (prevPage < startPage) {
        setStartPage(prevPage)
      }
    }
  }

  return (
    <>
      <Navbar />
      <main >
        <FormSearchAndSort
          kategori={dataCategory}
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          placeholder="Cari Blog, Event atau Berita ..."
        />
        <section className="  justify-center items-center md:px-[4rem] py-[6rem] max-md:px-[3rem]">
          <div className=" ring-2 overflow-hidden h-full  max-md:justify-center flex justify-center flex-wrap gap-[4rem]">
            {Object.values(dataBlog).map(({ category, id, slug, title, body, created_at }) => (
              <BlogCard
                error={error}
                loading={loading}
                categoryBlogs={category.name}
                id={id}
                slug={slug}
                key={id}
                title={title}
                body={body}
                created_at={created_at}
                foto={fotodua}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <div className="flex gap-4">

              <button onClick={handleStartPageSet} disabled={startPage === 1} className={`${currentPage === 1 ? 'hidden' : 'block'}`} >First</button>
              <button onClick={handlePrevPageSet} disabled={currentPage === 1}>Prev</button>


              {[...Array(pageLimit).keys()].map((index) => {
                const page = startPage + index
                if (page > lastPage) return null
                return (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    disabled={currentPage === page}
                    className={`${currentPage === page ? 'text-blue-900' : 'text-black'}`}
                  >
                    {page}
                  </button>
                )
              })}
              <p className={`${startPage + pageLimit > lastPage ? 'hidden' : 'block'}`}>...</p>
              <button onClick={handleNextPageSet} disabled={startPage + pageLimit > lastPage}>Next</button>
              <button onClick={handleEndPageSet} disabled={startPage + pageLimit > lastPage}>Last</button>
              <p>Page {currentPage} of {lastPage}</p>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}
export default Blog