import React from "react";
import styled from "styled-components";
import { db } from "../firebase";


const SidebarOption = (props) => {
  const { Icon, title, AddChannelOption, id } = props;

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name: ");
    if(channelName) {
        db.collection("rooms").add({
            name: channelName
        })
    }
  };
  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      onClick={AddChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 12px;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`;
