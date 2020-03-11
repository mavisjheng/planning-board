import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  OverlayTrigger,
  Tooltip,
  Modal,
  Navbar,
  Dropdown
} from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineDownload, AiOutlineImport } from "react-icons/ai";
import teams from "./data/teams";
import "./style.css";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 8px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const ToolButton = styled.button`
  border-radius: 50%;
  width: 38px;
  height: 38px;
  border: 2px solid;
  text-align: center;
  margin-left: 8px;
  color: black;
  font: 22px Arial;
  outline: none;
  :focus {
    outline: none;
  }
  :active {
    border: 2px solid lightgrey;
    color: lightgrey;
  }
`;

export default function Toolbar({ onClickImport, onSelectTeam, selectedTeam }) {
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
      <Navbar bg="dark" sticky="top" className="nav-toolbar">
        <Navbar.Brand>Planning Board</Navbar.Brand>
        <Container>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>Clean Board</Tooltip>}
          >
            <ToolButton onClick={handleShowModal}>
              <FiTrash2 />
            </ToolButton>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>Export</Tooltip>}
          >
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
            placement="bottom"
            overlay={<Tooltip>Import .txt</Tooltip>}
          >
            <ToolButton onClick={onClickImport}>
              <AiOutlineImport />
            </ToolButton>
          </OverlayTrigger>
          <Dropdown onSelect={team => onSelectTeam(team)}>
            <Dropdown.Toggle variant="info">
              {selectedTeam ? selectedTeam : "Select Team"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {teams.name.map(team => (
                <Dropdown.Item
                  key={team}
                  eventKey={team}
                  className="team-dropdown-item"
                >
                  {team}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
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
