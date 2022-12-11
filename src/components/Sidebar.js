import React from "react";
import { Box, Drawer } from "@mui/material";
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
  FiberManualRecord,
} from "@mui/icons-material";

import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";

const Drawers = () => {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <Drawer className="drawer" variant="permanent">
      <SidebarHeader>
        <SidebarInfo>
          <h2>HANGOVER IV HQ</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <Box className="drawer-box">
        <SidebarOption Icon={InsertComment} title="Threads" />
        <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
        <SidebarOption Icon={Drafts} title="Saved Items" />
        <SidebarOption Icon={Bookmark} title="Channel Browing" />
        <SidebarOption Icon={PeopleAlt} title="People and user groups" />
        <SidebarOption Icon={Apps} title="Apps" />
        <SidebarOption Icon={FileCopy} title="File Browser" />
        <SidebarOption Icon={ExpandLess} title="Show less" />
        <hr style={{ border: "1px solid #49274b" }} />
        <SidebarOption Icon={ExpandMore} title="Channels" />
        <hr style={{ border: "1px solid #49274b" }} />
        <SidebarOption Icon={Add} AddChannelOption title="Add Channel" />
        {channels?.docs.map((doc) => (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        ))}
      </Box>
    </Drawer>
  );
};
export default Drawers;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  background-color: var(--slack-color);
  margin-top: 64px;
  color: white;

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
