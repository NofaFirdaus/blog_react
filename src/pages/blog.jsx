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
  const [error, setError] = useState(false)
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
        setError(false)
      })
      .catch(() => {
        setError(true)
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
        <section className="  justify-center items-center  md:px-[4rem] py-[6rem] max-md:px-[3rem]">
          <div className={`   overflow-hidden  ${error ? 'h-[25vh] items-center' : 'h-full'} max-md:justify-center flex justify-center flex-wrap gap-[4rem] justify-self-center `}>
            {error ? (<><div className={` text-red-900  ring-1 ring-red-900  text-lg font-semibold bg-red-300 h-[3rem] px-4 flex items-center justify-center rounded-md`}><p>Network Error</p></div></>) : ''}
            
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
          <div className={`flex-col items-end  mt-[1rem] gap-[1rem] ${error ? 'hidden' : 'block'}`}>
            <div className="flex justify-end items-center  gap-2 text-lg font-semibold  h-[2.2rem] rounded-full ">
              <button
                onClick={handleStartPageSet} disabled={currentPage === 1}
                className={`${currentPage === 1 ? 'hidden' : 'block'}  hover:text-slate-50 hover:bg-port-gore-950  hover:ring-2 hover:ring-port-gore-950   hover:ease-in    ease-out transition items-center flex h-[2.2rem] rounded-full w-[2.2rem] justify-center `} >
                <svg className='w-6 h-6     ease-out   transition  ' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 16-4-4 4-4m-6 8-4-4 4-4" />
                </svg>

              </button>
              <button className={`${currentPage === 1 ? 'hidden ' : 'block hover:text-slate-50 hover:bg-port-gore-950  hover:ring-2 hover:ring-port-gore-950   hover:ease-in'}    h-[2.2rem] rounded-full w-[2.2rem] justify-center items-center flex transition`} onClick={handlePrevPageSet} disabled={currentPage === 1}>
                <svg className="w-6 h-6   " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 8-4 4 4 4" />
                </svg>


              </button>
              <p className={`${startPage === 1 ? 'hidden' : 'block'}  h-[2.2rem] rounded-full w-[2.2rem] justify-center items-center flex  `}>...</p>

              {[...Array(pageLimit).keys()].map((index) => {
                const page = startPage + index
                if (page > lastPage) return null
                return (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    disabled={currentPage === page}
                    className={`${currentPage === page ? 'bg-port-gore-950 text-slate-50 ring-2 ring-port-gore-950 ' : 'bg-white text-slate-950 hover:text-slate-50 hover:bg-port-gore-950  hover:ring-2 hover:ring-port-gore-950 transition ease-linear-out hover:ease-linear-in'}  h-[2.2rem] rounded-full w-[2.2rem] justify-center items-center flex `}
                  >
                    {page}
                  </button>
                )
              })}
              <p className={`${startPage + pageLimit > lastPage ? 'hidden' : 'block'}  h-[2.2rem] rounded-full w-[2.2rem] justify-center items-center flex  `}>...</p>

              <button className={`${currentPage === lastPage ? 'hidden ' : 'block hover:text-slate-50 hover:bg-port-gore-950  hover:ring-2 hover:ring-port-gore-950   hover:ease-in'}  h-[2.2rem] rounded-full w-[2.2rem] justify-center items-center flex `} onClick={handleNextPageSet} disabled={currentPage === lastPage}>
                <svg className="w-6 h-6  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
                </svg>

              </button>

              <button onClick={handleEndPageSet} className={` hover:text-slate-50 hover:bg-port-gore-950  hover:ring-2 hover:ring-port-gore-950  transition hover:ease-in  h-[2.2rem] rounded-full w-[2.2rem] justify-center items-center flex  ${currentPage === lastPage ? ' hidden ' : ' block '} `} disabled={currentPage === lastPage}>
                <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                </svg>
              </button>
            </div>
            <div className="flex mt-4 justify-end items-center">
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