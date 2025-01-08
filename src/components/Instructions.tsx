import { useState } from "react";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const Instructions = () => {

    const [instructions, setInstructions] = useState(false);

    const toggleInstructions = () => setInstructions(!instructions)

    return (
        <>
            <Button onClick={toggleInstructions} color="secondary" size="lg" style={{ width: "100%", borderRadius: "10px", padding: "10px 20px", fontSize: "1.2rem" }}>
                INSTRUCTIONS
            </Button>
            <Modal isOpen={instructions} toggle={toggleInstructions} centered>
                <ModalHeader toggle={toggleInstructions}>How to play</ModalHeader>
                <ModalBody>
                    <Col className="text-center">
                        <h3>PYRI ARVAAMAAN SANA KUUDEN YRITYKSEN SISÄLLÄ</h3>
                        <p style={{ fontSize: "1.2rem", marginTop: "10px", textTransform: "uppercase", lineHeight:"18px"}}>
                            Tavoitteena on arvata piilotettu viiden kirjaimen sana mahdollisimman vähillä yrityksillä. Jokaisen arvauksen jälkeen saat vihjeitä:
                        </p>
                    </Col>
                    <Row
                        className="align-items-center mb-4 justify-content-center mx-auto"
                        style={{
                            border: "2px solid black",
                            backgroundColor: "#f8f9fa",
                            padding: "15px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            height: "125px",
                        }}
                    >
                        <Col className="text-center">
                            <p style={{ fontSize: "1.2rem", margin: "0", color: "#6c757d" }}>
                                <strong>HARMAA</strong> - VÄÄRÄ KIRJAIN VÄÄRÄSSÄ PAIKASSA
                            </p>
                        </Col>
                    </Row>
                    <Row
                        className="align-items-center mb-4 justify-content-center mx-auto"
                        style={{
                            border: "2px solid black",
                            backgroundColor: "#fffbea",
                            padding: "15px",
                            borderRadius: "10px",
                            boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
                            height: "125px"
                        }}
                    >
                        <Col className="text-center">
                            <p style={{ fontSize: "1.2rem", margin: "0", color: "#b89b00" }}>
                                <strong>KELTAINEN</strong> - OIKEA KIRJAIN VÄÄRÄSSÄ PAIKASSA
                            </p>
                        </Col>
                    </Row>
                    <Row
                        className="align-items-center justify-content-center mx-auto"
                        style={{
                            border: "2px solid black",
                            backgroundColor: "#e6f4ea",
                            padding: "15px",
                            borderRadius: "10px",
                            boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
                            height: "125px"
                        }}
                    >
                        <Col className="text-center">
                            <p style={{ fontSize: "1.2rem", margin: "0", color: "#2c6e49" }}>
                                <strong>VIHREÄ</strong> - OIKEA KIRJAIN OIKEASSA PAIKASSA
                            </p>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>

        </>
    )

}

export default Instructions;