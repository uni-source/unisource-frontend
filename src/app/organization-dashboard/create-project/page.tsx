"use client";
import MiniDrawer from "@/app/components/dashboard/organization-dashboard/side-nav/sidenav";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateProject from "@/app/components/dashboard/organization-dashboard/create-project-component/create-project-component";
import Loading from "@/app/components/loading/loading";
import { useGetOrganizationQuery } from "../../../../redux/features/organization/organizationApi";
import organizationAuth from "../../custom-hooks/organizationAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  }, []);

  const { data: organization, isLoading } = useGetOrganizationQuery(userId, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (organization) {
      setIsVerifying(true);
      if (!organization.data.verifiedOrganization) {
        toast.error("You can't access this resource. Please contact the administrator.", {
          duration: 5000,
        });
        router.push("/organization-dashboard");
      } else {
        setIsVerifying(false); 
      }
    }
  }, [organization, router]);

  if (isLoading || isVerifying) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="Projects" organization={organization} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: 8,
        }}
      >
        <CreateProject organizationId={userId} />
      </Box>
    </Box>
  );
};

export default organizationAuth(Page);
