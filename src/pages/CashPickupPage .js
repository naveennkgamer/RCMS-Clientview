import React, { useState, useEffect } from 'react';
import Menubar from '../components/Menubar';
import './Cashpickup.css';
import Addressbar from '../components/Addressbar';
import Export from '../assets/images/export.png';
import TransactionTable from '../components/TransactionTable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const CashPickupPage = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('isDarkMode') === 'true';
    });
    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);
    // ✅ Moved tableData here
    const [tableData] = useState([
        { sr: 1, total: 5834, completed: 5800, pending: 34, amount: 9584236 },
        { sr: 2, total: 3537, completed: 3037, pending: 500, amount: 539574 },
        { sr: 3, total: 9341, completed: 9000, pending: 341, amount: 1584236 },
        { sr: 4, total: 1993, completed: 1990, pending: 3, amount: 2025170 },
        { sr: 5, total: 3758, completed: 779, pending: 2950, amount: 95236 },
        { sr: 6, total: 4008, completed: 2500, pending: 1508, amount: 98436 },
        { sr: 7, total: 7457, completed: 5800, pending: 1657, amount: 84236 },
        { sr: 8, total: 5367, completed: 5000, pending: 367, amount: 39584236 },
        { sr: 9, total: 8779, completed: 6500, pending: 2279, amount: 95236 },
        { sr: 10, total: 5634, completed: 5800, pending: 34, amount: 9584236 },
        { sr: 11, total: 46534, completed: 5800, pending: 84, amount: 9584236 },
        { sr: 12, total: 4437, completed: 3037, pending: 990, amount: 89574 },
        { sr: 13, total: 3541, completed: 9000, pending: 381, amount: 3584236 },
        { sr: 14, total: 6793, completed: 1990, pending: 30, amount: 7025170 },
        { sr: 15, total: 32358, completed: 6779, pending: 850, amount: 345236 },
        { sr: 16, total: 7808, completed: 2500, pending: 408, amount: 56436 },
        { sr: 17, total: 8957, completed: 53540, pending: 3457, amount: 54236 },
        { sr: 18, total: 23467, completed: 8000, pending: 367, amount: 4584236 },
        { sr: 19, total: 8779, completed: 6500, pending: 2279, amount: 56236 },
        { sr: 20, total: 5634, completed: 5800, pending: 34, amount: 2384236 },
        { sr: 21, total: 6574, completed: 5800, pending: 340, amount: 684236 },
        { sr: 22, total: 3537, completed: 3037, pending: 590, amount: 49574 },
        { sr: 23, total: 9781, completed: 9000, pending: 321, amount: 39584236 },
        { sr: 24, total: 9993, completed: 3890, pending: 30, amount: 1525170 },
        { sr: 25, total: 3758, completed: 779, pending: 2550, amount: 92236 },
        { sr: 26, total: 6008, completed: 2500, pending: 1508, amount: 42436 },
        { sr: 27, total: 7457, completed: 5800, pending: 1657, amount: 67236 },
        { sr: 28, total: 9367, completed: 6700, pending: 367, amount: 5584236 },
        { sr: 29, total: 6779, completed: 6500, pending: 2279, amount: 85236 },
        { sr: 30, total: 5634, completed: 5800, pending: 34, amount: 7584236 },
        { sr: 31, total: 5834, completed: 4800, pending: 4, amount: 984236 },
        { sr: 32, total: 3537, completed: 3037, pending: 800, amount: 39574 },
        { sr: 33, total: 6741, completed: 9000, pending: 41, amount: 2584236 },
        { sr: 34, total: 1993, completed: 5690, pending: 67, amount: 7025170 },
        { sr: 35, total: 3758, completed: 7709, pending: 1350, amount: 5236 },
        { sr: 36, total: 3508, completed: 2500, pending: 108, amount: 8436 },
        { sr: 37, total: 7457, completed: 5800, pending: 157, amount: 236 },
        { sr: 38, total: 5667, completed: 7800, pending: 37, amount: 584236 },
        { sr: 39, total: 8779, completed: 6500, pending: 279, amount: 5236 },
        { sr: 40, total: 5634, completed: 5800, pending: 304, amount: 584236 },

        { sr: 41, total: 5834, completed: 5800, pending: 340, amount: 6584236 },
        { sr: 42, total: 3537, completed: 3537, pending: 580, amount: 839574 },
        { sr: 43, total: 9341, completed: 4600, pending: 31, amount: 8584236 },
        { sr: 44, total: 1993, completed: 8990, pending: 30, amount: 25170 },
        { sr: 45, total: 4558, completed: 5679, pending: 250, amount: 105236 },
        { sr: 46, total: 4008, completed: 9800, pending: 108, amount: 98436 },
        { sr: 47, total: 7457, completed: 5800, pending: 167, amount: 24236 },
        { sr: 48, total: 8967, completed: 8900, pending: 3607, amount: 984236 },
        { sr: 49, total: 8779, completed: 6500, pending: 229, amount: 35236 },
        { sr: 50, total: 7834, completed: 4800, pending: 94, amount: 4236 },
        { sr: 1, total: 5834, completed: 5800, pending: 34, amount: 9584236 },
        { sr: 2, total: 3537, completed: 3037, pending: 500, amount: 539574 },
        { sr: 3, total: 9341, completed: 9000, pending: 341, amount: 1584236 },
        { sr: 4, total: 1993, completed: 1990, pending: 3, amount: 2025170 },
        { sr: 5, total: 3758, completed: 779, pending: 2950, amount: 95236 },
        { sr: 6, total: 4008, completed: 2500, pending: 1508, amount: 98436 },
        { sr: 7, total: 7457, completed: 5800, pending: 1657, amount: 84236 },
        { sr: 8, total: 5367, completed: 5000, pending: 367, amount: 39584236 },
        { sr: 9, total: 8779, completed: 6500, pending: 2279, amount: 95236 },
        { sr: 10, total: 5634, completed: 5800, pending: 34, amount: 9584236 },
        { sr: 11, total: 46534, completed: 5800, pending: 84, amount: 9584236 },
        { sr: 12, total: 4437, completed: 3037, pending: 990, amount: 89574 },
        { sr: 13, total: 3541, completed: 9000, pending: 381, amount: 3584236 },
        { sr: 14, total: 6793, completed: 1990, pending: 30, amount: 7025170 },
        { sr: 15, total: 32358, completed: 6779, pending: 850, amount: 345236 },
        { sr: 16, total: 7808, completed: 2500, pending: 408, amount: 56436 },
        { sr: 17, total: 8957, completed: 53540, pending: 3457, amount: 54236 },
        { sr: 18, total: 23467, completed: 8000, pending: 367, amount: 4584236 },
        { sr: 19, total: 8779, completed: 6500, pending: 2279, amount: 56236 },
        { sr: 20, total: 5634, completed: 5800, pending: 34, amount: 2384236 },
        { sr: 21, total: 6574, completed: 5800, pending: 340, amount: 684236 },
        { sr: 22, total: 3537, completed: 3037, pending: 590, amount: 49574 },
        { sr: 23, total: 9781, completed: 9000, pending: 321, amount: 39584236 },
        { sr: 24, total: 9993, completed: 3890, pending: 30, amount: 1525170 },
        { sr: 25, total: 3758, completed: 779, pending: 2550, amount: 92236 },
        { sr: 26, total: 6008, completed: 2500, pending: 1508, amount: 42436 },
        { sr: 27, total: 7457, completed: 5800, pending: 1657, amount: 67236 },
        { sr: 28, total: 9367, completed: 6700, pending: 367, amount: 5584236 },
        { sr: 29, total: 6779, completed: 6500, pending: 2279, amount: 85236 },
        { sr: 30, total: 5634, completed: 5800, pending: 34, amount: 7584236 },
        { sr: 31, total: 5834, completed: 4800, pending: 4, amount: 984236 },
        { sr: 32, total: 3537, completed: 3037, pending: 800, amount: 39574 },
        { sr: 33, total: 6741, completed: 9000, pending: 41, amount: 2584236 },
        { sr: 34, total: 1993, completed: 5690, pending: 67, amount: 7025170 },
        { sr: 35, total: 3758, completed: 7709, pending: 1350, amount: 5236 },
        { sr: 36, total: 3508, completed: 2500, pending: 108, amount: 8436 },
        { sr: 37, total: 7457, completed: 5800, pending: 157, amount: 236 },
        { sr: 38, total: 5667, completed: 7800, pending: 37, amount: 584236 },
        { sr: 39, total: 8779, completed: 6500, pending: 279, amount: 5236 },
        { sr: 40, total: 5634, completed: 5800, pending: 304, amount: 584236 },

        { sr: 41, total: 5834, completed: 5800, pending: 340, amount: 6584236 },
        { sr: 42, total: 3537, completed: 3537, pending: 580, amount: 839574 },
        { sr: 43, total: 9341, completed: 4600, pending: 31, amount: 8584236 },
        { sr: 44, total: 1993, completed: 8990, pending: 30, amount: 25170 },
        { sr: 45, total: 4558, completed: 5679, pending: 250, amount: 105236 },
        { sr: 46, total: 4008, completed: 9800, pending: 108, amount: 98436 },
        { sr: 47, total: 7457, completed: 5800, pending: 167, amount: 24236 },
        { sr: 48, total: 8967, completed: 8900, pending: 3607, amount: 984236 },
        { sr: 49, total: 8779, completed: 6500, pending: 229, amount: 35236 },
        { sr: 50, total: 7834, completed: 4800, pending: 94, amount: 4236 },
        { sr: 1, total: 5834, completed: 5800, pending: 34, amount: 9584236 },
        { sr: 2, total: 3537, completed: 3037, pending: 500, amount: 539574 },
        { sr: 3, total: 9341, completed: 9000, pending: 341, amount: 1584236 },
        { sr: 4, total: 1993, completed: 1990, pending: 3, amount: 2025170 },
        { sr: 5, total: 3758, completed: 779, pending: 2950, amount: 95236 },
        { sr: 6, total: 4008, completed: 2500, pending: 1508, amount: 98436 },
        { sr: 7, total: 7457, completed: 5800, pending: 1657, amount: 84236 },
        { sr: 8, total: 5367, completed: 5000, pending: 367, amount: 39584236 },
        { sr: 9, total: 8779, completed: 6500, pending: 2279, amount: 95236 },
        { sr: 10, total: 5634, completed: 5800, pending: 34, amount: 9584236 },
        { sr: 11, total: 46534, completed: 5800, pending: 84, amount: 9584236 },
        { sr: 12, total: 4437, completed: 3037, pending: 990, amount: 89574 },
        { sr: 13, total: 3541, completed: 9000, pending: 381, amount: 3584236 },
        { sr: 14, total: 6793, completed: 1990, pending: 30, amount: 7025170 },
        { sr: 15, total: 32358, completed: 6779, pending: 850, amount: 345236 },
        { sr: 16, total: 7808, completed: 2500, pending: 408, amount: 56436 },
        { sr: 17, total: 8957, completed: 53540, pending: 3457, amount: 54236 },
        { sr: 18, total: 23467, completed: 8000, pending: 367, amount: 4584236 },
        { sr: 19, total: 8779, completed: 6500, pending: 2279, amount: 56236 },
        { sr: 20, total: 5634, completed: 5800, pending: 34, amount: 2384236 },
        { sr: 21, total: 6574, completed: 5800, pending: 340, amount: 684236 },
        { sr: 22, total: 3537, completed: 3037, pending: 590, amount: 49574 },
        { sr: 23, total: 9781, completed: 9000, pending: 321, amount: 39584236 },
        { sr: 24, total: 9993, completed: 3890, pending: 30, amount: 1525170 },
        { sr: 25, total: 3758, completed: 779, pending: 2550, amount: 92236 },
        { sr: 26, total: 6008, completed: 2500, pending: 1508, amount: 42436 },
        { sr: 27, total: 7457, completed: 5800, pending: 1657, amount: 67236 },
        { sr: 28, total: 9367, completed: 6700, pending: 367, amount: 5584236 },
        { sr: 29, total: 6779, completed: 6500, pending: 2279, amount: 85236 },
        { sr: 30, total: 5634, completed: 5800, pending: 34, amount: 7584236 },
        { sr: 31, total: 5834, completed: 4800, pending: 4, amount: 984236 },
        { sr: 32, total: 3537, completed: 3037, pending: 800, amount: 39574 },
        { sr: 33, total: 6741, completed: 9000, pending: 41, amount: 2584236 },
        { sr: 34, total: 1993, completed: 5690, pending: 67, amount: 7025170 },
        { sr: 35, total: 3758, completed: 7709, pending: 1350, amount: 5236 },
        { sr: 36, total: 3508, completed: 2500, pending: 108, amount: 8436 },
        { sr: 37, total: 7457, completed: 5800, pending: 157, amount: 236 },
        { sr: 38, total: 5667, completed: 7800, pending: 37, amount: 584236 },
        { sr: 39, total: 8779, completed: 6500, pending: 279, amount: 5236 },
        { sr: 40, total: 5634, completed: 5800, pending: 304, amount: 584236 },

        { sr: 41, total: 5834, completed: 5800, pending: 340, amount: 6584236 },
        { sr: 42, total: 3537, completed: 3537, pending: 580, amount: 839574 },
        { sr: 43, total: 9341, completed: 4600, pending: 31, amount: 8584236 },
        { sr: 44, total: 1993, completed: 8990, pending: 30, amount: 25170 },
        { sr: 45, total: 4558, completed: 5679, pending: 250, amount: 105236 },
        { sr: 46, total: 4008, completed: 9800, pending: 108, amount: 98436 },
        { sr: 47, total: 7457, completed: 5800, pending: 167, amount: 24236 },
        { sr: 48, total: 8967, completed: 8900, pending: 3607, amount: 984236 },
        { sr: 49, total: 8779, completed: 6500, pending: 229, amount: 35236 },
        { sr: 50, total: 7834, completed: 4800, pending: 94, amount: 4236 }, { sr: 41, total: 5834, completed: 5800, pending: 340, amount: 6584236 },
        { sr: 42, total: 3537, completed: 3537, pending: 580, amount: 839574 },
        { sr: 43, total: 9341, completed: 4600, pending: 31, amount: 8584236 },
        { sr: 44, total: 1993, completed: 8990, pending: 30, amount: 25170 },
        { sr: 45, total: 4558, completed: 5679, pending: 250, amount: 105236 },
        { sr: 46, total: 4008, completed: 9800, pending: 108, amount: 98436 },
        { sr: 47, total: 7457, completed: 5800, pending: 167, amount: 24236 },
        { sr: 48, total: 8967, completed: 8900, pending: 3607, amount: 984236 },
        { sr: 49, total: 8779, completed: 6500, pending: 229, amount: 35236 },
        { sr: 50, total: 7834, completed: 4800, pending: 94, amount: 4236 },
        { sr: 41, total: 5834, completed: 5800, pending: 340, amount: 6584236 },
        { sr: 42, total: 3537, completed: 3537, pending: 580, amount: 839574 },
        { sr: 43, total: 9341, completed: 4600, pending: 31, amount: 8584236 },
        { sr: 44, total: 1993, completed: 8990, pending: 30, amount: 25170 },
        { sr: 45, total: 4558, completed: 5679, pending: 250, amount: 105236 },
        { sr: 46, total: 4008, completed: 9800, pending: 108, amount: 98436 },
        { sr: 47, total: 7457, completed: 5800, pending: 167, amount: 24236 },
        { sr: 48, total: 8967, completed: 8900, pending: 3607, amount: 984236 },
        { sr: 49, total: 8779, completed: 6500, pending: 229, amount: 35236 },
        { sr: 50, total: 7834, completed: 4800, pending: 94, amount: 4236 }, { sr: 41, total: 5834, completed: 5800, pending: 340, amount: 6584236 },
        { sr: 42, total: 3537, completed: 3537, pending: 580, amount: 839574 },
        { sr: 43, total: 9341, completed: 4600, pending: 31, amount: 8584236 },
        { sr: 44, total: 1993, completed: 8990, pending: 30, amount: 25170 },
        { sr: 45, total: 4558, completed: 5679, pending: 250, amount: 105236 },
        { sr: 46, total: 4008, completed: 9800, pending: 108, amount: 98436 },
        { sr: 47, total: 7457, completed: 5800, pending: 167, amount: 24236 },
        { sr: 48, total: 8967, completed: 8900, pending: 3607, amount: 984236 },
        { sr: 49, total: 8779, completed: 6500, pending: 229, amount: 35236 },
        { sr: 50, total: 7834, completed: 4800, pending: 94, amount: 4236 }, { sr: 41, total: 5834, completed: 5800, pending: 340, amount: 6584236 },
        { sr: 42, total: 3537, completed: 3537, pending: 580, amount: 839574 },
        { sr: 43, total: 9341, completed: 4600, pending: 31, amount: 8584236 },
        { sr: 44, total: 1993, completed: 8990, pending: 30, amount: 25170 },
        { sr: 45, total: 4558, completed: 5679, pending: 250, amount: 105236 },
        { sr: 46, total: 4008, completed: 9800, pending: 108, amount: 98436 },
        { sr: 47, total: 7457, completed: 5800, pending: 167, amount: 24236 },
        { sr: 48, total: 8967, completed: 8900, pending: 3607, amount: 984236 },
        { sr: 49, total: 8779, completed: 6500, pending: 229, amount: 35236 },
        { sr: 50, total: 7834, completed: 4800, pending: 94, amount: 4236 }
    ]);

    // ✅ Export function
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(tableData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const file = new Blob([excelBuffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });

        saveAs(file, 'Transactions.xlsx');
    };


    return (
        <div className="dashboard-container">
            <Menubar isDarkMode={isDarkMode} />
            <div className="right-content">
                <Addressbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

                <div className="Transactionsdtls">
                    <div className="table-header">
                        <span className="tabletitle">Transactions Data Table</span>

                        <div className="date-range">
                            <div className="from">
                                <span className="label">From</span>
                                <input type="date" className="date-input" />
                            </div>
                            <div className="to">
                                <span className="label">To</span>
                                <input type="date" className="date-input" />
                            </div>
                        </div>

                        <div className="actions">
                            <div className="ExportExcelbut">
                                <button className="exportbutton" onClick={exportToExcel}>
                                    <span className="export-text">Export Excel</span>
                                </button>
                            </div>

                            <button className="filter-button">
                                <img src={Export} alt="filter" className="filter-icon" />
                                Apply Filter
                            </button>
                        </div>
                    </div>

                </div>


                <div className="Transactionsdtls" >
                    <TransactionTable data={tableData} />
                </div>




            </div>
        </div>
    );
};

export default CashPickupPage;