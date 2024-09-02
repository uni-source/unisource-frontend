"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/faculty-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import PendingList from "@/app/components/dashboard/faculty-dashboard/faculty-pending-project/pending-list/pending-list";
import ViewPendingProject from "@/app/components/dashboard/faculty-dashboard/faculty-pending-project/pending-table/pending-table";
import { useGetAdminByIdentityIdQuery } from "../../../../../redux/features/admin/adminApi";
import Loading from "@/app/components/loading/loading";
import adminAuth from "@/app/custom-hooks/adminApi";

//

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
  const { data: mentor, isLoading, refetch } = useGetAdminByIdentityIdQuery(userId,
    { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return <div><Loading /></div>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="View Projects" mentor={mentor} />
      <ViewPendingProject  id={params.id}/>
    </Box>
  );
};

export default adminAuth(Page);
