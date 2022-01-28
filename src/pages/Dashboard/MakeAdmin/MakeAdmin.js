import React, { useState } from 'react';
import { Alert, Button, FormControl, InputGroup } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    // handle make admin
    const handleMakeAdmin = e => {
        const user = { email };

        fetch('https://mighty-waters-53050.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true);
                    // window.location.reload()
                }
            })
        e.preventDefault();
    }
    return (
        <div className="d-block w-50 m-auto pt-5">
            {/* make admin title */}
            <h2 className='text-center'>MAKE AN ADMIN</h2>

            {/* input form for making admin */}
            <form onSubmit={handleMakeAdmin} className="mt-5">

                <InputGroup className="mb-3 pt-1 w-50 mx-auto">
                    <FormControl
                        placeholder="Enter new admin email"
                        aria-label="Your Email"
                        aria-describedby="basic-addon2"
                        onBlur={handleOnBlur}
                        type="email"
                        className="py-2"
                    />

                </InputGroup>

                <Button variant="primary"
                    className="btn_regular w-50 py-2 mt-2 d-block m-auto" type="submit">
                    Make Admin
                </Button><br />
            </form>


            {
                success && <Alert variant='success'>
                    Made Admin Successfully
                </Alert>
            }
        </div>
    );
};

export default MakeAdmin;