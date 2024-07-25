import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion } from '../redux/regionSlice';
import { setData } from '../redux/dataSlice';

const RegionSelector = () => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.region);

  const handleRegionChange = (e) => {
    dispatch(setRegion(e.target.value));
  };

  useEffect(() => {
    dispatch(setData([]));
  }, [region, dispatch]);

  return (
    <div>
      <label htmlFor="region">Select Region:</label>
      <select id="region" value={region} onChange={handleRegionChange}>
        <option value="US">United States</option>
        <option value="PL">Poland</option>
        <option value="GE">Georgia</option>
      </select>
    </div>
  );
};

export default React.memo(RegionSelector);
