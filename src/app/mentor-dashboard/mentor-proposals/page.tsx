"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/mentor-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import SearchBox from "@/app/components/dashboard/mentor-dashboard/mentor-allprojects/search-box/search-box";
import ProposalTable from "@/app/components/dashboard/mentor-dashboard/mentor-proposal/proposal-list/proposal-list";

const Page: React.FC = ({ params }: any) => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
      console.log(parsedUser?.id);
    }
  }, []);  // Added an empty dependency array to only run this effect once.

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="Pending Proposals" mentor={null} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: 4,
          '@media (max-width: 600px)': {
            width: 320,
          },
        }}
      >
        <SearchBox/>
        <ProposalTable/>
      </Box>
    </Box>
  );
};

export default Page;
