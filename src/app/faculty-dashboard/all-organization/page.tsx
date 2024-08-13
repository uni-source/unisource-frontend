"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/faculty-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";

import { useGetMentorByIdentityQuery } from "../../../../redux/features/mentor/mentorApi"; 
import Loading from "@/app/components/loading/loading";

import OrganizationTable from "@/app/components/dashboard/faculty-dashboard/all-organizations/organization-list/organization-list";
import SearchBox from "@/app/components/dashboard/faculty-dashboard/all-organizations/search-box/search-box";

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
  const { data: mentor, isLoading, refetch } = useGetMentorByIdentityQuery(userId,
    { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return <div><Loading /></div>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="All Organizations" mentor={mentor} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: 7,
          '@media (max-width: 600px)': {
            width: 320,
          },
        }}
      >
        <SearchBox/>
        <OrganizationTable/>
      </Box>
    </Box>
  );
};

export default Page;
