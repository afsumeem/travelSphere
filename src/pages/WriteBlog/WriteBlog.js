import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const fileInput = React.createRef();

const WriteBlog = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // handle submit button 
    const onSubmit = data => {

        let image = fileInput.current.files[0];

        const formData = new FormData();

        for (var key in data) {
            formData.append(key, data[key]);
        }

        formData.append('image', image);

        axios.post('http://localhost:5000/blogs', formData, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            }
        })
            .then(res => {
                if (res.data.insertedId) {
                    alert("Blog Added successfully");
                    reset();
                }
            })
    };


    return (
        <div className="product-form-container">

            {/* add brand title */}
            <h2 className=" pt-5 text-white text-uppercase">Share Your Experience</h2>
            <div className="d-flex justify-content-center">


                {/* Add brand form */}
                <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                    <input className=" m-2 w-50 px-4 py-2 opacity-75" placeholder="Brand Name" {...register("name", { required: true })} />


                    {/* img upload */}
                    <input className="m-2 w-50 px-4 py-2 bg-white opacity-75" name="image" accept='image/*' ref={fileInput} type="file" />


                    <input className="m-2 w-50 px-4 py-2 opacity-75" placeholder="Product Description"{...register("desc", { required: true })} />
                    <br />

                    <input className="m-2 w-50 px-4 py-2 opacity-75" placeholder="Price"{...register("price", { required: true })} />
                    <br />


                    {/* submit button */}
                    < input className="d-block mx-auto m-3 btn btn-primary w-50" type="submit" value="Add Brand" />


                    {/* explore all perfume brands button  */}
                    < NavLink to="/explore" className=" text-decoration-none d-block mx-auto m-3 btn w-50 btn-outline-primary" > View All Brands</NavLink>

                </form>
            </div>
        </div>
    );
};

export default WriteBlog;