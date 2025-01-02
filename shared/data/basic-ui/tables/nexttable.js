import React, { memo, useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import dynamic from "next/dynamic";
import { sortOption } from '../../forms/formselect/formselect';
const Select = dynamic(() => import("react-select"), { ssr: false });

const DataTable = ({ progressStatus, columns, data, clearData, handleDataCount }) => {
  const [rows, setRows] = useState(data);
  const [searchText, setSearchText] = useState('');
  const [sortName, setSortName] = useState('');
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25, // Default page size
    page: 0, // Start from the first page
  });

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const searchFields = ['title', 'description', 'phone', 'email', 'keywords'];
    const filteredRows = data.filter((row) => {
      return searchFields.some((field) => {
        return row[field] && row[field].toLowerCase().includes(value);
      });
    });
    setSearchText(value);
    setRows(filteredRows);
  };

  const handleSorting = (e)=>{
    const filterData = data.filter(row=>row[e.label] !== "N/A")
    setRows(filterData)
    setSortName(e)
  }

  const removeSorting = ()=> {
    setSortName("")
    setRows(data)
  }

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) =>
      row.id === newRow.id ? { ...row, ...newRow } : row
    );
    setRows(updatedRows);
    return newRow;
  };

  const handleProcessRowUpdateError = (error) => {
    console.error('Error updating row:', error);
  };

  useEffect(()=>{
    setRows(data) 
  },[data])

  useEffect(()=>{
    const website = rows.filter(row=> row.website !== "N/A").length;
    const email = rows.filter(row=> row.email !== "N/A").length;
    const phone = rows.filter(row=> row.phone !== "N/A").length;
    const ary = [
      {title: "records", num: rows.length},
      {title: "website", num: website},
      {title: "phone", num: phone},
      {title: "email", num: email}
    ]
    handleDataCount(ary)
  }, [rows])

  return (
    <div className="box-body">
      <div className="flex justify-between mb-4">
        <div className='w-1/4'>
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search..."
            className="ti-form-input"
          />
        </div>

        <div className="flex gap-2 items-center">
          {
            sortName && 
            <button className='text-sm text-red-500 hover:underline' onClick={removeSorting}>
              Clear sorting
              <i className="ri-close-line"></i>
            </button>
          }
          <Select classNamePrefix='react-select ti-form-input' id='react-select-3-live-region' value={sortName} className="capitalize" options={sortOption} placeholder='Sort By' onChange={handleSorting} />

          <button type="button" className="py-1 px-2 ti-btn ml-0 md:ml-auto bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 dark:focus:ring-offset-white/10" onClick={clearData} disabled={progressStatus.isScraping || progressStatus.isExtracting}>
            Clear Data
            <i className="ri-close-line"></i>
          </button>
        </div>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        rowsPerPageOptions={[25, 50, 100]} // Pagination options
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={handleProcessRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        components={{
          Toolbar: GridToolbar, // Adds filtering and export options
        }}
      />
    </div>
  );
};

export default memo(DataTable);
