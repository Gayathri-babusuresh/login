import { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import '../App.css'; // Import the external stylesheet

function Home() {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('user')))


    return (
        <>
            <h1 className="text-center py-5">Employee Details</h1>
            <Container className="d-flex justify-content-center align-items-center" >

                <Card>
                    <table >
                        <thead className="fs-5" style={{ borderBottom: "solid 2px black" }}>
                            <th style={{ padding: "0 10px" }}>Name</th>
                            <th style={{ padding: "0 10px" }}>Position</th>
                            <th style={{ padding: "0 10px" }}>Phone</th>
                            <th style={{ padding: "0 10px" }}>Email</th>
                            <th style={{ padding: "0 10px" }}>More Info</th>

                        </thead>
                        <tbody>
                            {
                                data.map(val => <tr className="fs-5" style={{ borderBottom: "1px solid #ddd" }}>
                                    <td style={{ padding: "10px" }} >{val.name}</td>
                                    <td style={{ padding: "10px" }}>{val.position}</td>
                                    <td style={{ padding: "10px" }}>{val.phone}</td>
                                    <td style={{ padding: "10px" }}>{val.email}</td>
                                    <td style={{ padding: "10px" }}><Button>click here</Button></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </Card>

            </Container>
        </>
    )
}

export default Home;