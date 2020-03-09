import React, { useState } from "react";
import styled from "styled-components";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import teams from "./data/teams";
import "./custom.css";

const ButtonContainer = styled.div`
  margin: 8px;
  position: absolute;
  top: 0px;
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

export const CircleButton = styled.button`
  border-radius: 50%;
  width: 38px;
  height: 38px;
  border: 2px solid;
  text-align: center;
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

export default function TeamList({ selectedTeam, onSelectTeam }) {
  const [teamListDisplayed, setTeamListDisplayed] = useState(false);
  const handleToggleTeamList = teamListDisplayed =>
    setTeamListDisplayed(!teamListDisplayed);

  return (
    <>
      <ButtonContainer>
        <OverlayTrigger
          placement="left"
          overlay={
            <Tooltip>{selectedTeam ? selectedTeam : "Select Team"}</Tooltip>
          }
        >
          <CircleButton onClick={() => handleToggleTeamList(teamListDisplayed)}>
            {teamListDisplayed ? (
              <FiChevronsUp />
            ) : selectedTeam ? (
              selectedTeam[0]
            ) : (
              <FiChevronsDown />
            )}
          </CircleButton>
        </OverlayTrigger>
      </ButtonContainer>
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
    </>
  );
}
