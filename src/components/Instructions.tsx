import { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

const Instructions = () => {

    const [instructions, setInstructions] = useState(false);

    const toggleInstructions = () => setInstructions(!instructions)

    return (
        <>
            <Button onClick={toggleInstructions} color="secondary" size="lg" style={{ width: "100%", borderRadius: "10px", padding: "10px 20px", fontSize: "1.2rem"}}>
                INSTRUCTIONS
            </Button>
            <Modal isOpen={instructions} toggle={toggleInstructions}>
                <ModalHeader toggle={toggleInstructions}>
                    How to play
                </ModalHeader>
                <ModalBody>
                    <p>
                        Add instructions, text and pictures here
                    </p>
                </ModalBody>
            </Modal>
        </>
    )

}

export default Instructions;