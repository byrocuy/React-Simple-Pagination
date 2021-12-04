import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import data from './data/MOCK_DATA.json';
import './App.css';

let PageSize = 10;

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>GENDER</th>
            <th>IP ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name} {item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.ip_address}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination 
      className="pagination-bar"
      currentPage={currentPage}
      totalCount={data.length}
      pageSize={PageSize}
      onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}

export default App;
