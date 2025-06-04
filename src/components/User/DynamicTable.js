import React from 'react';

const DynamicTable = ({ columns = [], data = [] }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="text-center">
              No records found
            </td>
          </tr>
        ) : (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map(({ accessor, cell }, colIndex) => (
                <td key={colIndex}>
                  {cell ? cell(row[accessor]) : row[accessor]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DynamicTable;
