import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorCount } from '../redux/errorSlice';
import { setData } from '../redux/dataSlice';

const ErrorSlider = () => {
  const dispatch = useDispatch();
  const errorCount = useSelector((state) => state.error);

  const handleSliderChange = (e) => {
    dispatch(setErrorCount(Number(e.target.value)));
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 1000) {
      dispatch(setErrorCount(value));
    }
  };

  useEffect(() => {
    dispatch(setData([]));
  }, [errorCount, dispatch]);

  return (
    <div>
      <label htmlFor="error-slider">Number of errors per record:</label>
      <input
        type="range"
        id="error-slider"
        min="0"
        max="10"
        value={errorCount}
        onChange={handleSliderChange}
      />
      <input
        type="number"
        min="0"
        max="1000"
        value={errorCount}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default React.memo(ErrorSlider);
