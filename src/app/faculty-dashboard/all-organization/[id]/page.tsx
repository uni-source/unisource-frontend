"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/faculty-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import PendingList from "@/app/components/dashboard/faculty-dashboard/faculty-pending-project/pending-list/pending-list";
import ViewPendingProject from "@/app/components/dashboard/faculty-dashboard/faculty-pending-project/pending-table/pending-table";
import ProfileStats from "@/app/components/dashboard/faculty-dashboard/all-organizations/profile-stats/stat";
import AccountInformationForm from "@/app/components/dashboard/faculty-dashboard/all-organizations/account-info/account-info";


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
      <MiniDrawer childTitle="Organization Profile" mentor={null} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8, '@media (max-width: 600px)': {
            width: 320,
          }, }}>
        <ProfileStats/>
        <AccountInformationForm/>
      </Box>
    </Box>
  );
};

export default Page;
