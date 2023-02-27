import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../route/theme";
import Item from "./Nav";
import {
  HomeOutlinedIcon,
  MenuOutlinedIcon,
} from "../../../route/components/sidebar";
import { DataNavItems, PagesNavItems, ChartsNavItems } from "./index";
export default function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box display="flex" height="100vh">
      <Sidebar
        rootStyles={{
          backgroundColor: colors.primary[400],
        }}
      >
        <Menu>
          <MenuItem onClick={() => collapseSidebar()}>
            {collapsed ? <MenuOutlinedIcon /> : undefined}
          </MenuItem>
          <MenuItem>
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}{" "}
          </MenuItem>
          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="user profile image"
                  width="100px"
                  height="100px"
                  src="https://images.pexels.com/photos/9833110/pexels-photo-9833110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Batel Haiylo
                </Typography>
                <Typography variant="h5" color={colors.redAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            {DataNavItems?.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                to={item.endPoint}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            {PagesNavItems?.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                to={item.endPoint}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            {ChartsNavItems?.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                to={item.endPoint}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}
