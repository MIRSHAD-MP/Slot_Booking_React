import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch from '../../Hooks/useFetch'
import Progress from '../Progressbar/Progress';



const RecordLIst = () => {
    const { isLoading, serverError, apiData } = useFetch("/admin/allApplications");
    return (
        <div className='main'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead className='tablehead' >
                        <TableRow>
                            <TableCell style={{ color: '#000' }}>NUMBER</TableCell>
                            <TableCell style={{ color: '#000' }}>COMPANY NAME</TableCell>
                            <TableCell style={{ color: '#000' }}>COMPANY DETAILS</TableCell>
                            <TableCell style={{ color: '#000' }}>SLOT</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiData?.map((data, index) => (
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        {parseInt(index) + 1}
                                    </TableCell>
                                    <TableCell >{data.application.companyName}</TableCell>
                                    <TableCell >
                                    {data.application.city}<br/>
                                    {data.application.phoneNumber}<br/>
                                    {data.application.email}
                                    </TableCell>
                                    <TableCell >{data.application.slot}</TableCell>
                                    <TableCell >
                                        <Progress status={data.application.status}/>
                                    </TableCell>
                                </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default RecordLIst
