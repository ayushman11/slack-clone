import React from "react";
import { AppBar, Toolbar, Avatar } from "@mui/material";
import { AccessTime, Search, HelpOutline } from "@mui/icons-material";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#3f0f40",
      }}
    >
      <Toolbar>
        <HeaderLeft>
          <HeaderAvatar
            src={user?.photoURL}
            alt={user?.displayName}
            onClick={() => auth.signOut()}
            referrerPolicy="no-referrer"
          />
          <AccessTime />
        </HeaderLeft>
        {/* Header Search */}
        <HeaderSearch>
          <Search />
          <input placeholder="Search channel, workspace, DM, ..." />
        </HeaderSearch>
        {/* Header Right */}
        <HeaderRight>
          <HelpOutline />
        </HeaderRight>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    text-align: center;
    min-width: 30vw;
    border: none;
    outline: none;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
