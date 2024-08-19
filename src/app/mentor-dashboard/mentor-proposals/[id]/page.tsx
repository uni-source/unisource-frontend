"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/mentor-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import ViewProposal from "@/app/components/dashboard/mentor-dashboard/mentor-proposal/proposal-table/proposal-table";
import mentorAuth from "@/app/custom-hooks/mentorAuth";
import { useGetMentorByIdentityQuery } from "../../../../../redux/features/mentor/mentorApi";


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
  const {
    data: organization,
    isLoading,
    refetch,
  } = useGetMentorByIdentityQuery(userId, { refetchOnMountOrArgChange: true });
  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="View Proposals" mentor={null} />
      <ViewProposal proposalId={params.id} mentor={organization?.data}/>
    </Box>
  );
};

export default mentorAuth(Page);
