"use client";
import MiniDrawer from "@/app/components/dashboard/student-dashboard/side-nav/sidenav";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllProjects from "../../components/dashboard/student-dashboard/all-projects/AllProjects";
import studentAuth from "@/app/custom-hooks/studentAuth";
import Loading from "@/app/components/loading/loading";
import { useGetStudentQuery } from "../../../../redux/features/student/studentApi";
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

  const { data: student, isLoading } = useGetStudentQuery(userId, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (student) {
      // Start verification check
      setIsVerifying(true);
      if (!student.data.verifiedStudent) {
        toast.error("You can't access this resource. Please contact the administrator.", {
          duration: 5000, 
        });
        router.push("/student-dashboard");
      } else {
        setIsVerifying(false); // Set verification check complete
      }
    }
  }, [student, router]);

  if (isLoading || isVerifying) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="Projects" student={student} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: 8,
          "@media (max-width: 600px)": {
            width: 320,
          },
        }}
      >
        <h4>Available projects</h4>
        <AllProjects />
      </Box>
    </Box>
  );
};

export default studentAuth(Page);
