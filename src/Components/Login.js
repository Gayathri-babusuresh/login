import { Card, Form, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LogIn() {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('user')))
    const navigation = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.email.value.length !== 0 && e.target.password.value.length !== 0) {
            for (let val of data) {
                if (e.target.email.value === val.email && e.target.password.value === val.password) {
                    alert("successfully logged in");
                    navigation('/home');
                }
        
            }
        }
        else {
            alert("Invalid email or password")
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", width: "100vw" }}>
                <Card className="border rounded-3" style={{ width: "480px" }}>
                    <h2 className="text-center mt-3">Log In</h2>
                    <Card.Body>
                        <Form onSubmit={(e) => handleSubmit(e)}>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" />
                            </Form.Group>

                            <Button type="submit" className="w-100 my-3 fs-5" >Log In</Button>

                            <p className="text-center">Need an Profile?<Link to="/" className="text-decoration-none"> Sign Up</Link></p>
                        </Form>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default LogIn;