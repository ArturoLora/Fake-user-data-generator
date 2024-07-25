import React, { memo } from 'react';
import './App.css';
import RegionSelector from './components/RegionSelector';
import ErrorSlider from './components/ErrorSlider';
import SeedInput from './components/SeedInput';
import DataTable from './components/DataTable';
import ExportCSV from './components/ExportCSV';

const MemoizedRegionSelector = memo(RegionSelector);
const MemoizedErrorSlider = memo(ErrorSlider);
const MemoizedSeedInput = memo(SeedInput);
const MemoizedExportCSV = memo(ExportCSV);
const MemoizedDataTable = memo(DataTable);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fake User Data Generator</h1>
        <MemoizedRegionSelector />
        <MemoizedErrorSlider />
        <MemoizedSeedInput />
        <MemoizedExportCSV />
        <MemoizedDataTable />
      </header>
    </div>
  );
}

export default App;
