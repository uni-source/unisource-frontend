'use client';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import SearchBox from '../search-box/search-box';
import './project-list.css';
import { useRouter } from 'next/navigation';
import { useGetProjectByOrganizationIdQuery } from '../../../../../../../redux/features/project/projectApi';
import Loading from '@/app/components/loading/loading';


const ProjectTable:React.FC = () =>  {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Project ID', flex: 1 },
        { field: 'pjname', headerName: 'Project Name', flex: 1 },
        { field: 'title', headerName: 'Title', flex: 1 },
        { field: 'category', headerName: 'Category', flex: 1 },
        { field: 'src', headerName: 'Source', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 },
        {
            field: 'view',
            headerName: 'View',
            flex: 1,
            renderCell: (params) => (
                <Button
                    className='view-button'
                    variant="contained"
                    href = "/faculty-dashboard/all-projects/view-project"
                >
                    View
                </Button>
            ),
        },
    ];

    const rows = [
        { id:'1', pjname: 'UniSource', title: 'FOSS', category: 'Software', src:'USJ', status: 'Pending'}
      ];

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
                <Box sx={{ minWidth: 800 }}>

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
        </div>
    );
};

export default ProjectTable;
