// frontend/src/components/FilterControls.js
import React from 'react';

function FilterControls({ year, setYear, month, setMonth }) {
    return (
        <div className="filter-controls">
            <label>
                Year:
                <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Enter year (e.g., 2020)"
                />
            </label>
            <label>
                Month:
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                    <option value="">All</option>
                    <option value="Jan">January</option>
                    <option value="Feb">February</option>
                    <option value="Mar">March</option>
                    <option value="Apr">April</option>
                    <option value="May">May</option>
                    <option value="Jun">June</option>
                    <option value="Jul">July</option>
                    <option value="Aug">August</option>
                    <option value="Sep">September</option>
                    <option value="Oct">October</option>
                    <option value="Nov">November</option>
                    <option value="Dec">December</option>
                </select>
            </label>
        </div>
    );
}

export default FilterControls;
