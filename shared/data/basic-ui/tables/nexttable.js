import React, { memo, useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import dynamic from "next/dynamic";
import { sortOption } from '../../forms/formselect/formselect';
const Select = dynamic(() => import("react-select"), { ssr: false });

const DataTable = ({ progressStatus, columns, data, clearData, handleDataCount, hideClear = false, sortOptions = sortOption }) => {
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortName, setSortName] = useState('');
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25, // Default page size
    page: 0, // Start from the first page
  });

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const searchFields = ['title', 'website', 'description', 'keywords', 'phone', 'email', 'query', 'user_type'];
    const filteredRows = data.filter((row) => {
      return searchFields.some((field) => {
        return row[field] && String(row[field]).toLowerCase().includes(value);
      });
    });
    setSearchText(value);
    setRows(filteredRows.map((item, ind)=>({id: ind+1, ...item})));
  };

  const handleSorting = (e)=>{
    const filterData = data.filter(row=>(row[e.value])).map((item, ind)=>({id: ind+1, ...item}))
    let sort=[];
    if(e.value === "paid"){
      sort = data.filter(row=>(row.access_code))
    }
    else if(e.value === "unpaid"){
      console.log(e)
      sort = data.filter(row=>!row.access_code)
    }
    else if(e.value === "verified"){
      sort = data.filter(row=>!row.access_code)
    }
    setRows(sort.length ? sort.map((item, ind)=>({id: ind+1, ...item})) : filterData)
    setSortName(e)
  }

  const removeSorting = ()=> {
    setSortName("")
    setRows(data.map((item, ind)=>({id: ind+1, ...item})))
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

  useEffect(() => {
    const serialData = data.map((item, ind) => {
      if (item.id !== undefined) {
        return item; // Keep the existing data as is
      }
      return { id: ind + 1, ...item };
    });
    setRows(serialData);
  }, [data]);
  

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
      <div className="flex flex-wrap gap-3 justify-between mb-4">
        <div className='w-full md:w-auto flex items-center gap-4'>
          <div className='w-full md:w-auto'>
            <input
              type="text"
              value={searchText}
              onChange={handleSearch}
              placeholder="Search..."
              className="ti-form-input"
            />
          </div>
          {
            progressStatus.isScraping &&
            <div>
              <div className="ti-spinner w-8 h-8 text-primary" role="status" aria-label="loading"><span className="sr-only">Loading...</span></div>
            </div>
          }
        </div>

        <div className="w-full md:w-auto flex gap-2 items-center justify-between">
          {
            sortName && 
            <button className='text-sm text-red-500 hover:underline' onClick={removeSorting}>
              Clear sorting
              <i className="ri-close-line"></i>
            </button>
          }
          <Select classNamePrefix='react-select ti-form-input' id='react-select-3-live-region' value={sortName} className="capitalize" options={sortOptions} placeholder='Sort By' onChange={handleSorting} />

          {
            !hideClear &&
            <button type="button" className="py-1 px-2 ti-btn ml-0 md:ml-auto bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 dark:focus:ring-offset-white/10" onClick={clearData} disabled={progressStatus.isScraping || progressStatus.isExtracting}>
              Clear Data
              <i className="ri-close-line"></i>
            </button>
          }
        </div>
      </div>
      <DataGrid
        rows={
          progressStatus.isScraping && !rows.length
            ? Array.from({ length: 10 }, (_, index) => ({
                id: `skeleton-${index}`,
                name: "",
                age: "",
              })) // Placeholder rows for skeleton
            : rows
        }
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
