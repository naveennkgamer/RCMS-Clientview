import React, { useState, useEffect } from 'react';
import './TransactionTable.css';

const rowsPerPage = 10;

const TransactionTable = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [maxVisiblePages, setMaxVisiblePages] = useState(15);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    useEffect(() => {
        const handleResize = () => {
            setMaxVisiblePages(window.innerWidth < 850 ? 3 : 15);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getPaginationRange = () => {
        const pages = [];

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else if (maxVisiblePages === 3) {
            // Responsive minimal pagination
            if (currentPage > 2) pages.push(1, 'start-ellipsis');
            pages.push(currentPage);
            if (currentPage < totalPages - 1) pages.push('end-ellipsis', totalPages);
        } else {
            const sideCount = 2;
            let start = Math.max(currentPage - sideCount, 2);
            let end = Math.min(currentPage + sideCount, totalPages - 1);

            if (currentPage <= 5) {
                start = 2;
                end = 8;
            } else if (currentPage >= totalPages - 4) {
                start = totalPages - 7;
                end = totalPages - 1;
            }

            pages.push(1);
            if (start > 2) pages.push('start-ellipsis');
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            if (end < totalPages - 1) pages.push('end-ellipsis');
            pages.push(totalPages);
        }

        return pages;
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentRows = data.slice(startIndex, startIndex + rowsPerPage);

    return (
        <div className="tabledata">
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Total Transactions</th>
                        <th>Completed Transactions</th>
                        <th>Pending Transactions</th>
                        <th>Total Amt Collected</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                            <td>{row.sr.toString().padStart(2, '0')}</td>
                            <td>{row.total}</td>
                            <td>{row.completed}</td>
                            <td>{row.pending}</td>
                            <td>₹ {row.amount.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="nav-button"
                >
                    &lt; Prev
                </button>

                {getPaginationRange().map((item, index) => {
                    if (item === 'start-ellipsis' || item === 'end-ellipsis') {
                        return <span key={index} className="ellipsis">...</span>;
                    }
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(item)}
                            className={`page-button ${currentPage === item ? 'active' : ''}`}
                        >
                            {item}
                        </button>
                    );
                })}

                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="nav-button"
                >
                    Next &gt;
                </button>
            </div>
        </div>
    );
};

export default TransactionTable;
