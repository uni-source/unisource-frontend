'use client';
import './AllProjects.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import { useGetAllProjectsQuery } from '../../../../../../redux/features/project/projectApi';
import Loading from '@/app/components/loading/loading';

interface Project {
  id: number;
  name: string;
  title: string;
  category: string;
  resource: string;
  dueDate: string;
  description: string;
}

const AllProjects = () => {
  const router = useRouter();
  const { data: projects, isLoading, isError } = useGetAllProjectsQuery({});
  const [search, setSearch] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = React.useMemo(() => {
    if (!projects?.data) return [];

    return (projects.data as Project[])
      .filter((project: Project) =>
        project.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((project: Project) =>
        selectedCategory === 'All' || project.category === selectedCategory
      );
  }, [projects?.data, search, selectedCategory]);

  const categories = React.useMemo(() => {
    if (!projects?.data) return ['All'];

    const uniqueCategories = new Set((projects.data as Project[]).map(project => project.category));
    return ['All', ...Array.from(uniqueCategories)];
  }, [projects?.data]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleViewClick = (id: number) => {
    router.push(`/student-dashboard/student-projects/${id}`);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Project ID', flex: 1 },
    { field: 'name', headerName: 'Project Name', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'resource', headerName: 'Source', flex: 1 },
    { field: 'dueDate', headerName: 'Due Date', flex: 1 },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      renderCell: (params) => (
        <Button className="ac-info-button"  onClick={() => handleViewClick(params.row.id)}>
          View
        </Button>
      )
    }
  ];

  if (isLoading) return <p><Loading /></p>;

  return (
    <Box
    
      sx={{
        height: 500,
        width: '100%',
        overflow: 'auto',
        '@media (max-width:600px)': {
          width: '100%',
          overflowX: 'auto'
        }
      }}
    >
      <Box
      marginTop={5}
        sx={{
          display: 'flex',
          gap: 2,
          mb: 2,
          flexDirection: {
            xs: 'column',
            sm: 'row'
          }
        }}
      >
        <TextField
          label="Search by Name"
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearchChange}
          sx={{ flex: 1 }}
        />
        <TextField
          select
          label="Category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="outlined"
          sx={{ flex: 1 }}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
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
  );
};

export default AllProjects;
