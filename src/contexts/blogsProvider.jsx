import  { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Membuat context
export const BlogContext = createContext();

// eslint-disable-next-line react/prop-types
export const BlogProvider = ({ children }) => {
  const [dataBlog, setDataBlog] = useState({});
  const [lastPage, setLastPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mengambil data blog dari API
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/blogs?page=${currentPage}`)
      .then((response) => {
        setDataBlog(response.data.data);
        setLastPage(response.data.last_page);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <BlogContext.Provider value={{ dataBlog, lastPage, currentPage, setCurrentPage, loading, error }}>
      {children}
    </BlogContext.Provider>
  )
};