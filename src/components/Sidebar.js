import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
            <h2>HANGOVER IV HQ</h2>
            <h3>
                <FiberManualRecordIcon />
                Ayushman Choudhary
            </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div``;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;
