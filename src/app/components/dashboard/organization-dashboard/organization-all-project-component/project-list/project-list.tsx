'use client';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import SearchBox from '../search-box/search-box';
import './project-list.css';
import { useRouter } from 'next/navigation'
import { useGetAllProjectsQuery } from '../../../../../../../redux/features/project/projectApi';
import Loading from '@/app/components/loading/loading';

const ProjectTable = () => {
    const { data: projects = [], isLoading, error } = useGetAllProjectsQuery({});
    const [filteredRows, setFilteredRows] = useState(projects);
    const router = useRouter();
    const handleViewClick = (id: number) => {
      router.push(`/organization-dashboard/organization-all-projects/${id}`);
     };
    useEffect(() => {
        setFilteredRows(projects);
    }, [projects]);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Project ID', flex: 1 },
        { field: 'pjname', headerName: 'Project Name', flex: 1 },
        { field: 'title', headerName: 'Title', flex: 1 },
        { field: 'category', headerName: 'Category', flex: 1 },
        { field: 'due_date', headerName: 'Due Date', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 },
        {
            field: 'view',
            headerName: 'View',
            flex: 1,
            renderCell: (params) => (
                <Button
                    className='view-button'
                    variant="contained"
                    onClick={() => handleViewClick(params.row.id)}
                >
                    View
                </Button>
            ),
        },
    ];

    const handleSearch = (query: string) => {
      if (query) {
          setFilteredRows(projects.filter((project: any) => project.id.includes(query)));
      } else {
          setFilteredRows(projects);
      }
  };


    return (
        <div>
            <SearchBox onSearch={handleSearch} />
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
                <Box sx={{ minWidth: 800 }}>
                    {isLoading ? (
                        <Loading/>
                    ) :  (
                        <DataGrid
                            rows={filteredRows}
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
                    )}
                </Box>
            </Box>
        </div>
    );
};

export default ProjectTable;
