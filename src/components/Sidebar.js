import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Create,
  InsertComment,
  Inbox,
  Drafts,
  Bookmark,
  FileCopy,
  PeopleAlt,
  Apps,
  ExpandLess,
  ExpandMore,
  Add,
} from "@mui/icons-material";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  const [channels] = useCollection(db.collection("rooms"));

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
        <Create />
      </SidebarHeader>

      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={Bookmark} title="Channel Browing" />
      <SidebarOption Icon={PeopleAlt} title="People and user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} AddChannelOption title="Add Channel" />
      {channels?.docs.map((doc) => (
        <SidebarOption
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
        />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  margin-top: 60px;
  max-width: 260px;
  border-top: 1px solid #49274b;

  > hr {
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  /* margin-bottom: 10px; */
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    font-size: 13px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  > h3 .MuiSvgIcon-root {
    font-size: 14px;
    border-top: 1px;
    border-right: 2px;
    color: green;
  }
`;
