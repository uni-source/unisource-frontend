"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/faculty-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import PendingList from "@/app/components/dashboard/faculty-dashboard/faculty-pending-project/pending-list/pending-list";
import ViewPendingProject from "@/app/components/dashboard/faculty-dashboard/faculty-pending-project/pending-table/pending-table";


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
      <MiniDrawer childTitle="View Projects" mentor={null} />
      <ViewPendingProject/>
    </Box>
  );
};

export default Page;
