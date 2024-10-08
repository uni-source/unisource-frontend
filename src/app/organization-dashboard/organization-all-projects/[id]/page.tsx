"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/organization-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import Loading from "@/app/components/loading/loading";
import { useGetOrganizationQuery } from "../../../../../redux/features/organization/organizationApi";
import ProjectGrid from "@/app/components/dashboard/organization-dashboard/organization-all-project-component/project-table/project-table";
import organizationAuth from "@/app/custom-hooks/organizationAuth";


const Page: React.FC = ({params}:any) => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
      console.log(parsedUser?.id);
    }
  });

  const {
    data: organization,
    isLoading,
    refetch,
  } = useGetOrganizationQuery(userId, { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer
        childTitle="View Projects"
        organization={organization}
        
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 4,'@media (max-width: 600px)': {
            width: 320,
          }, }}>
            <ProjectGrid id={params.id} refetch={refetch}/>
            
        
      </Box>
    </Box>
  );
};


export default organizationAuth(Page);