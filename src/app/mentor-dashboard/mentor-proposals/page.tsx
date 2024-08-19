"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/mentor-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import ProposalTable from "@/app/components/dashboard/mentor-dashboard/mentor-proposal/proposal-list/proposal-list";
import { useGetMentorByIdentityQuery } from "../../../../redux/features/mentor/mentorApi"; 
import Loading from "@/app/components/loading/loading";
import mentorAuth from "@/app/custom-hooks/mentorAuth";

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
      <MiniDrawer childTitle="Pending Proposals" mentor={mentor} />
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
        <ProposalTable mentorId={mentor?.data?.id}/>
      </Box>
    </Box>
  );
};

export default mentorAuth(Page);
