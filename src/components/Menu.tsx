import { Button, Col, Container, Row } from "reactstrap";

const Menu = () => {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                padding: "20px",
            }}
        >
            <Container
                className="text-center"
                style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    padding: "40px",
                    maxWidth: "500px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #ddd",
                }}
            >
                <h1
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        marginBottom: "20px",
                        color: "#333",
                    }}
                >
                    Miska's Wordle
                </h1>
                <p style={{color: "#555", marginBottom: "30px" }}>
                    Wordle is a fun and addictive word game where the goal is to guess the hidden word in six tries.
                    After each guess, you'll receive hints about which letters are correct and in the right position.
                    Sharpen your vocabulary and take on the challenge!
                </p>

                <Row className="mb-3">
                    <Col>
                        <Button
                            color="primary"
                            size="lg"
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                padding: "10px 20px",
                                fontSize: "1.2rem",
                            }}
                        >
                            PLAY
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button
                            color="secondary"
                            size="lg"
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                padding: "10px 20px",
                                fontSize: "1.2rem",
                            }}
                        >
                            INSTRUCTIONS
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Menu;
