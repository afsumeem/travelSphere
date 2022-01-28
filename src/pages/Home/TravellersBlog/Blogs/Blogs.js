import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import "./Blogs.css";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [pages, setPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const perPageBlog = 10;

    // fetch blogs from api

    useEffect(() => {
        fetch(`https://mighty-waters-53050.herokuapp.com/blogs?currentPage=${currentPage}&&perPageBlog=${perPageBlog}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                // pagination
                const totalPage = data.count;
                const pageNumber = Math.ceil(totalPage / perPageBlog);
                setPages(pageNumber)
            })
    }, [currentPage]);


    return (
        <Row className='px-0'>

            <h3 className=' text-uppercase text-start '> <span className="main-font-color"></span></h3>

            {
                blogs.filter(singleBlog => singleBlog.status === "Approved").map(blog => <Blog
                    key={blog._id}
                    blog={blog}
                ></Blog>)
            }
            <div className="pagination">
                {
                    [...Array(pages).keys()]
                        .map(number => <Button
                            className={number === currentPage ? 'selected' : ''}
                            key={number}
                            onClick={() => setCurrentPage(number)}
                        >{number + 1}</Button>)
                }
            </div>
        </Row >
    );
};

export default Blogs;