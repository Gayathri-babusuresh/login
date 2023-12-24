import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {

    const [data, setData] = useState([])
    const navigation = useNavigate();

    useEffect(
        () => {
            setData(JSON.parse(localStorage.getItem('user')))
        },
        []
    )

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify([{
                name: e.target.name.value,
                position: e.target.job_role.value,
                address: e.target.address.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
                password: e.target.password.value,
                c_password: e.target.c_password.value
            }]))
            alert('Signed Up successfully');
            navigation('/login');
        } else {
            for (let val of data) {
                if (e.target.name.value.length === 0) {
                    alert("Name cannot be empty")
                }

                else if (val.name.includes(e.target.name.value)) {
                    alert("Name Already Exists");
                }
                else if (e.target.job_role.value.length === 0) {
                    alert("Job Role cannot be empty")
                }
                else if (e.target.address.value.length === 0) {
                    alert("Address cannot be empty")
                }
                else if (e.target.phone.value.length === 0) {
                    alert("Phone cannot be empty")
                }
                else if (e.target.email.value.length === 0) {
                    alert("Email cannot be empty")
                }
                else if (val.email.includes(e.target.email.value)) {
                    alert("Email Already Exists");
                }
                else if (e.target.password.value.length === 0) {
                    alert("Password cannot be empty")
                }
                else if (e.target.password.value !== e.target.c_password.value) {
                    alert("Password Mismatch")
                }
                else {
                    localStorage.setItem('user', JSON.stringify([...data, {
                        name: e.target.name.value,
                        position: e.target.job_role.value,
                        address: e.target.address.value,
                        phone: e.target.phone.value,
                        email: e.target.email.value,
                        password: e.target.password.value,
                        c_password: e.target.c_password.value,
                    }]))
                    alert('Signed Up successfully');
                    navigation('/login');
                }

            }
        }

    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", width: "100vw" }}>
                <Card className="border rounded-3" style={{ width: "480px" }}>
                    <h2 className="text-center mt-3">Sign Up</h2>
                    <Card.Body>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group>
                                <Form.Label >Name</Form.Label>
                                <Form.Control type="text" name="name" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label >Job Role</Form.Label>
                                <Form.Control type="text" name="job_role" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label >Address</Form.Label>
                                <Form.Control type="text" name="address" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label >Phone</Form.Label>
                                <Form.Control type="number" name="phone" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label >Email</Form.Label>
                                <Form.Control type="email" name="email" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label >Password</Form.Label>
                                <Form.Control type="password" name="password" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label >Confirm Password</Form.Label>
                                <Form.Control type="password" name="c_password" />
                            </Form.Group>

                            <Button type="submit" className="w-100 my-3 fs-5">Sign Up</Button>

                            <p className="text-center">Already have an account?<Link to="/login" className="text-decoration-none"> Log In</Link></p>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default SignUp;