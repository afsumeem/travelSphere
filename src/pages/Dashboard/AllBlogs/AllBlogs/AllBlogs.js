import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import AllBlog from '../AllBlog/AllBlog';

const AllBlogs = () => {
    const [manageAllBlogs, setManageAllBlogs] = useState([]);


    // fetch all blogs from api

    useEffect(() => {
        fetch('https://mighty-waters-53050.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => console.log(data.blog))
    }, []);

    return (
        <Container>
            <div className="table-responsive">
                {/* manage all Blogs title */}
                <h2>Manage All Blogs</h2>

                <Table striped bordered hover size="sm" className=" fs-6 border-4">

                    {/* all Blogs list header*/}
                    <thead>
                        <tr>
                            <th className="p-2">Name</th>
                            <th className="p-2">Location</th>
                            <th className="p-2">Tour Date</th>
                            <th className="p-2">Expense</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Manage Blog</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* map all Blog list*/}
                        {
                            manageAllBlogs.map(allBlogs => <AllBlog

                                key={allBlogs._id}
                                allBlogs={allBlogs}

                            ></AllBlog>)
                        }
                    </tbody>
                </Table>
            </div >
        </Container>
    );
};

export default AllBlogs;