"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/mentor-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import ViewProposal from "@/app/components/dashboard/mentor-dashboard/mentor-proposal/proposal-table/proposal-table";


const Page: React.FC = ({ params }: any) => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
      console.log(parsedUser?.id);
    }
  }, []);  

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="View Proposals" mentor={null} />
      <ViewProposal/>
    </Box>
  );
};

export default Page;
