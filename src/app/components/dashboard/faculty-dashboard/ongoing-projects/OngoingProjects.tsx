"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Card from "react-bootstrap/Card";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useGetAllProjectsQuery } from "../../../../../../redux/features/project/projectApi"; 

const CustomCard = styled(Card)({
  border: "none",
  borderRadius: "1rem",
  backgroundColor: "var(--light-grey) !important",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  padding: "10px"
});

const OngoingProjects = () => {
  // Fetch all projects
  const { data: projectData } = useGetAllProjectsQuery({});
  
  // Filter ongoing projects
  const ongoingProjects = React.useMemo(() => {
    return projectData?.data?.filter((project: any) => project.status === 'ONGOING') || [];
  }, [projectData]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Project Name", flex: 1 },
    { field: "mentor", headerName: "Mentor", flex: 1 },
    { field: "dueDate", headerName: "Due Date", flex: 1 },
  ];

  const rows = ongoingProjects.map((project: any) => ({
    id: project.id,
    name: project.name,
    mentor: project.mentorID, 
    dueDate: new Date(project.dueDate).toLocaleDateString(), 
  }));

  return (
    <CustomCard className="stat-card">
      <Typography variant="h5" component="div">Ongoing Projects</Typography>
      <br/>
      <Box
        sx={{
          height: 400,
          width: "100%",
          overflow: "auto",
          "@media (max-width:600px)": {
            width: "100%",
            overflowX: "auto",
          },
        }}
      >
        <Box>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </CustomCard>
  );
};

export default OngoingProjects;
