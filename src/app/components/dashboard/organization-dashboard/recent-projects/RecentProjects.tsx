"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Card from "react-bootstrap/Card";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useGetProjectByOrganizationIdQuery } from "../../../../../../redux/features/project/projectApi"; 

const CustomCard = styled(Card)({
  border: "none",
  borderRadius: "1rem",
  backgroundColor: "var(--light-grey) !important",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  padding: "10px",
});

const RecentProjects = ({ organizationId }: { organizationId: number }) => {
  const { data: projectData, isLoading, isError } = useGetProjectByOrganizationIdQuery(organizationId);

  const rows = React.useMemo(() => {
    if (!projectData || isError || isLoading) return [];
    const sortedProjects = [...projectData.data].sort((a: any, b: any) => b.id - a.id);

    return sortedProjects.slice(0, 10).map((project: any) => ({
      id: project.id,
      name: project.name,
      mentor: project.mentorName,
      DueDate: new Date(project.dueDate).toLocaleDateString(),
      status: project.status,
    }));
  }, [projectData, isLoading, isError]);

  return (
    <CustomCard className="stat-card">
      <Typography variant="h5" component="div">Recent Projects</Typography>
      <br />
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
        <DataGrid
          rows={rows}
          columns={[
            { field: "name", headerName: "Project Name", flex: 1 },
            { field: "mentor", headerName: "Mentor", flex: 1 },
            { field: "DueDate", headerName: "Due Date", flex: 1 },
            { field: "status", headerName: "Status", flex: 1 },
          ]}
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
    </CustomCard>
  );
};

export default RecentProjects;
