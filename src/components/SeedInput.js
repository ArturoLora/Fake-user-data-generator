import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSeed } from '../redux/seedSlice';
import { setData } from '../redux/dataSlice';
import seedrandom from 'seedrandom';

const SeedInput = () => {
  const dispatch = useDispatch();
  const seed = useSelector((state) => state.seed);
  const [localSeed, setLocalSeed] = useState(seed);

  const handleInputChange = (e) => {
    setLocalSeed(e.target.value);
  };

  const handleSetSeed = () => {
    dispatch(setSeed(localSeed));
  };

  const handleGenerateRandomSeed = () => {
    const randomSeed = seedrandom().int32().toString();
    setLocalSeed(randomSeed);
    dispatch(setSeed(randomSeed));
  };

  useEffect(() => {
    dispatch(setData([]));
  }, [seed, dispatch]);

  return (
    <div>
      <label htmlFor="seed-input">Seed Value:</label>
      <input
        type="text"
        id="seed-input"
        value={localSeed}
        onChange={handleInputChange}
      />
      <button onClick={handleSetSeed}>Set Seed</button>
      <button onClick={handleGenerateRandomSeed}>Generate Random Seed</button>
    </div>
  );
};

export default React.memo(SeedInput);
