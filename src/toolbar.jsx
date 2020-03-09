import React, { useState } from "react";
import styled from "styled-components";
import { Button, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineDownload, AiOutlineImport } from "react-icons/ai";
import { CircleButton } from "./team-list";
import "./custom.css";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 8px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const ToolButton = styled(CircleButton)`
  margin-left: 8px;
`;

export default function Toolbar({ onClickImport }) {
  const [modalDisplayed, setModalDisplayed] = useState(false);
  const handleCloseModal = () => setModalDisplayed(false);
  const handleShowModal = () => setModalDisplayed(true);

  const cleanBoard = () => {
    handleCloseModal();
    localStorage.clear("planningBoard");
    window.location.reload();
  };

  const exportFile = (content, fileName, contentType) => {
    const linkDOM = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    linkDOM.href = URL.createObjectURL(file);
    linkDOM.download = fileName;
    linkDOM.click();
  };

  return (
    <>
      <Container>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Clean Board</Tooltip>}
        >
          <ToolButton onClick={handleShowModal}>
            <FiTrash2 />
          </ToolButton>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Export</Tooltip>}>
          <ToolButton
            onClick={() =>
              exportFile(
                JSON.stringify(
                  JSON.parse(localStorage.getItem("planningBoard")),
                  null,
                  2
                ),
                "planning-board.txt",
                "text/plain"
              )
            }
          >
            <AiOutlineDownload />
          </ToolButton>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Import .txt</Tooltip>}
        >
          <ToolButton onClick={onClickImport}>
            <AiOutlineImport />
          </ToolButton>
        </OverlayTrigger>
      </Container>
      <Modal centered show={modalDisplayed} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to clean this board?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={cleanBoard}>
            Clean
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
