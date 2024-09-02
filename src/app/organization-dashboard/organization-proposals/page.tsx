"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/organization-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import Loading from "@/app/components/loading/loading";
import { useGetOrganizationQuery } from "../../../../redux/features/organization/organizationApi";
import SearchBox from "@/app/components/dashboard/organization-dashboard/organization-proposal/searchbox/searchbox";
import ProposalTable from "@/app/components/dashboard/organization-dashboard/organization-proposal/proposal-table/proposal-table";
import organizationAuth from "@/app/custom-hooks/organizationAuth";

const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  },[userId]);

  const {
    data: organization,
    isLoading,
    refetch,
  } = useGetOrganizationQuery(userId, { refetchOnMountOrArgChange: true });

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

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
        childTitle="Proposals"
        organization={organization}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 4,'@media (max-width: 600px)': {
            width: 320,
          }, }}>
         <SearchBox onSearch={handleSearch} />
         <ProposalTable organizationId={userId} searchTerm={searchTerm} />
      </Box>
    </Box>
  );
};

export default organizationAuth(Page);
