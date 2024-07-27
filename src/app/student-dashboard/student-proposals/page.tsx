"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/student-dashboard/side-nav/sidenav";
import studentAuth from "@/app/custom-hooks/studentAuth";
import Loading from "@/app/components/loading/loading";
import { useGetStudentQuery } from "../../../../redux/features/student/studentApi";
import ProposalGrid from "@/app/components/dashboard/student-dashboard/student-proposal/proposal-grid/ProposalGrid";
import { Box } from "@mui/material";
const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  });

  const {
    data: student,
    isLoading,
    refetch,
  } = useGetStudentQuery(userId, { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="My Proposals" student={student} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8 }}>
        <ProposalGrid />
      </Box>
    </Box>
    )
};
export default studentAuth(Page);
