"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/dashboard/mentor-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import ProfileStat from "@/app/components/dashboard/mentor-dashboard/mentor-profile/profile-stats/stat";
import AccountInformationForm from "@/app/components/dashboard/mentor-dashboard/mentor-profile/account-info/account-info";
import PasswordSettingsForm from "@/app/components/dashboard/mentor-dashboard/mentor-profile/psw-setting/psw-setting";
import Loading from "@/app/components/loading/loading";
import { useGetOrganizationQuery } from "../../../../redux/features/organization/organizationApi";
import organizationAuth from '../../custom-hooks/organizationAuth';
const Page: React.FC = () => {
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
        childTitle="Mentor Profile"
        mentor={organization}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 4 }}>
        <ProfileStat organization={organization} refetch={refetch} />
        <AccountInformationForm organization={organization} refetch={refetch} />
        <PasswordSettingsForm organization={organization} refetch={refetch} />
      </Box>
    </Box>
  );
};

// export default organizationAuth(Page);
export default Page;