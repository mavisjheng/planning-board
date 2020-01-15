import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import teams from "./data/teams";
import "./custom.css";

const Container = styled.div`
  margin: 8px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const TeamContainer = styled.div`
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
  width: 40px;
  height: 40px;
  border: 2px solid;
  text-align: center;
  color: DarkGoldenRod;
  font: 26px Arial;
  outline: none;
  :focus {
    outline: none;
  }
  :active {
    border: 2px solid lightgrey;
    color: lightgrey;
  }
`;

export default class TeamList extends Component {
  state = { teamNameDisplayed: false };

  render() {
    return (
      <Fragment>
        <Container>
          <OverlayTrigger
            placement="left"
            overlay={
              <Tooltip>
                {this.props.selectedTeam
                  ? this.props.selectedTeam
                  : "Select Team"}
              </Tooltip>
            }
          >
            <CircleButton
              onClick={() =>
                this.setState({
                  teamNameDisplayed: !this.state.teamNameDisplayed
                })
              }
            >
              {this.state.teamNameDisplayed
                ? "x"
                : this.props.selectedTeam
                ? this.props.selectedTeam[0]
                : "☟"}
            </CircleButton>
          </OverlayTrigger>
        </Container>
        {this.state.teamNameDisplayed && (
          <TeamContainer>
            {teams.name.map((team, index) => {
              const currentSelected = team === this.props.selectedTeam;
              return (
                <Button
                  key={index}
                  variant={currentSelected ? "info" : "outline-info"}
                  className="custom-team-button"
                  onClick={() => this.props.onSelect(team)}
                >
                  {team}
                </Button>
              );
            })}
          </TeamContainer>
        )}
      </Fragment>
    );
  }
}
