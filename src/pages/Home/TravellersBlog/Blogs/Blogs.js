import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    // fetch blogs from api

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <Row className='px-0'>
            <h3 className=' text-uppercase text-start '> <span className="main-font-color"></span></h3>

            {
                blogs.filter(singleBlog => singleBlog.status === "Approved").map(blog => <Blog
                    key={blog._id}
                    blog={blog}
                ></Blog>)
            }
        </Row >
    );
};

export default Blogs;