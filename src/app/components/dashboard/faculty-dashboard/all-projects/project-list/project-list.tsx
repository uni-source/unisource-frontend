'use client';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import { useGetAllProjectsQuery } from '../../../../../../../redux/features/project/projectApi'; 
import Loading from '@/app/components/loading/loading';
import './project-list.css';

const ProjectTable: React.FC = () => {
  const { data: projects, isLoading, error } = useGetAllProjectsQuery({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (projects) {
      const filtered = projects.data.filter((project: { name: string; }) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [projects, searchTerm]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Project ID', flex: 1 },
    { field: 'name', headerName: 'Project Name', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'resource', headerName: 'Source', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
  ];

  if (isLoading) return <Loading />;

  return (
    <div>
      <Box
        sx={{
          height: 400,
          width: '100%',
          overflow: 'auto',
          '@media (max-width:600px)': {
            width: '100%',
            overflowX: 'auto',
          },
        }}
      >
        <br/>
        <Box sx={{ minWidth: 800, mb: 2 }}>
          <TextField
            label="Search by Project Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <Box sx={{ minWidth: 800 }}>
          <DataGrid
            rows={filteredProjects}
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
    </div>
  );
};

export default ProjectTable;
