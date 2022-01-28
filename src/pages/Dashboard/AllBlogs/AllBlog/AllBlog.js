import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AllBlog = ({ allBlogs }) => {
    const { name, location, date, _id, expense, status } = allBlogs;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    // handle delete order from api
    const handleDeleteBlog = id => {
        const url = `https://mighty-waters-53050.herokuapp.com/blogs/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    window.location.reload();
                }
            })
            .finally(setShow(false))
    };

    //update order status

    const handleUpdateStatus = () => {
        const updated = { status: 'Approved' }

        const url = `https://mighty-waters-53050.herokuapp.com/blogs/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order approved');
                    window.location.reload()
                }
            })
    };

    return (
        <>
            {/* data from users orders  */}
            <tr>
                <td className="p-3">{name}</td>
                <td className="p-3">{location}</td>
                <td className="p-3">{date}</td>
                <td className="p-3">{expense}</td>
                <td className="p-3">{status}</td>

                <td>
                    <button className="border-0 btn btn-0 text-success" title="Confirm Order" onClick={handleUpdateStatus}>
                        <FontAwesomeIcon className="fs-6 me-2" icon={faCheck} />
                    </button>

                    <button className="border-0 btn btn-0 text-danger" title="Delete order" onClick={() => { setShow(true); }}>

                        <FontAwesomeIcon className="fs-6 me-2" icon={faTrashAlt} />
                    </button>
                </td>
            </tr>


            {/* Confirmation alert */}
            <Modal show={show} onHide={handleClose}>

                {/* modal title */}
                <div className="modal-header">
                    <h5 className="modal-title text-primary" id="exampleModalLabel">Confirmation</h5>
                </div>

                <Modal.Body>Are you sure you want to <span className="text-danger fw-bold"> Delete </span> this Blog? This action cannot be undone and you will be unable to recover any data.</Modal.Body>


                {/* confirmation button */}
                <Modal.Footer>

                    <Button variant="outline-danger" onClick={() => { handleDeleteBlog(_id) }}>
                        Yes! Delete it
                    </Button>
                    <Button variant="outline-success" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default AllBlog;