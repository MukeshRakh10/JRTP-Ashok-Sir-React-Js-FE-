import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog, FaUserTie, FaColumns, FaThList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import styled from "styled-components";

const Menuitem = styled(MenuItem)`
  :hover {
    background-color: #ffdb58;
    padding: 5px;
    border-radius: 10px;
  }
`;

const SideNav = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { onClickOutside } = props;

  const styles = {
    sideBarHeight: {
      height: "145vh"
    },
    menuIcon: {
      // float: "right",
      margin: "0px 0px 8px 32px"
    }
  };


  useEffect(() => {
    document.addEventListener('click', onClickMenuIcon, true);
    return () => {
      document.removeEventListener('click', onClickMenuIcon, true);
    };
  }, [onClickOutside]);

  const onClickMenuIcon = () => {
    // alert("onClickMenuIcon");
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <Menuitem icon={<FaColumns />}> Dashboard</Menuitem>
        <SubMenu title="Application Registration" icon={<FaThList />}>
          <Menuitem>Create Application</Menuitem>
          <Menuitem>View Applications</Menuitem>

        </SubMenu>
        <SubMenu title="Data Collection" icon={<FaThList />}>
          <Menuitem onClick={() => navigate("/admin")} >Create Case</Menuitem>
          <Menuitem onClick={() => navigate("/admin")} >Plan Selection</Menuitem>
          <Menuitem onClick={() => navigate("/admin")} >Income Details</Menuitem>
          <Menuitem onClick={() => navigate("/admin")} >Education Details</Menuitem>
          <Menuitem onClick={() => navigate("/create")} >Kids Details</Menuitem>
          <Menuitem onClick={() => navigate("/create")} >Summary Screen</Menuitem>

        </SubMenu>
        <Menuitem icon={<FaCog />}>Settings</Menuitem>
      </Menu>
    </ProSidebar>
  );
};
export default SideNav;
