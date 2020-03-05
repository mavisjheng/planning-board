import React, { useState } from "react";
import styled from "styled-components";
import { Button, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import teams from "./data/teams";
import "./custom.css";

const SelectionContainer = styled.div`
  margin: 8px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const TrashContainer = styled.div`
  margin: 8px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const TeamListContainer = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 48px;
  right: 0px;
  float: right;
`;

const CircleButton = styled.button`
  border-radius: 50%;
  width: 42px;
  height: 40px;
  border: 2px solid;
  text-align: center;
  color: #bc9055;
  font: 24px Arial;
  outline: none;
  :focus {
    outline: none;
  }
  :active {
    border: 2px solid #e0ccb1;
    color: #e0ccb1;
  }
`;

const TrashButton = styled(CircleButton)`
  color: black;
  :active {
    border: 2px solid lightgrey;
    color: lightgrey;
  }
`;

export default function TeamList({ selectedTeam, onSelectTeam }) {
  const [teamListDisplayed, setTeamListDisplayed] = useState(false);
  const handleToggleTeamList = teamListDisplayed =>
    setTeamListDisplayed(!teamListDisplayed);

  const [modalDisplayed, setModalDisplayed] = useState(false);
  const handleCloseModal = () => setModalDisplayed(false);
  const handleShowModal = () => setModalDisplayed(true);

  const cleanBoard = () => {
    handleCloseModal();
    localStorage.clear("planningBoard");
    window.location.reload();
  };

  return (
    <>
      <SelectionContainer>
        <OverlayTrigger
          placement="left"
          overlay={
            <Tooltip>{selectedTeam ? selectedTeam : "Select Team"}</Tooltip>
          }
        >
          <CircleButton onClick={() => handleToggleTeamList(teamListDisplayed)}>
            {teamListDisplayed ? "⩓" : selectedTeam ? selectedTeam[0] : "⩔"}
          </CircleButton>
        </OverlayTrigger>
      </SelectionContainer>
      {teamListDisplayed && (
        <TeamListContainer>
          {teams.name.map((team, index) => (
            <Button
              key={index}
              variant={team === selectedTeam ? "info" : "outline-info"}
              className="custom-team-button"
              onClick={() => onSelectTeam(team)}
            >
              {team}
            </Button>
          ))}
        </TeamListContainer>
      )}
      <TrashContainer>
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Clean Board</Tooltip>}
        >
          <TrashButton onClick={handleShowModal}>{"♻"}</TrashButton>
        </OverlayTrigger>
      </TrashContainer>
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
