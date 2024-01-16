import React from 'react';

import { ChartsHeader, LineChart } from '../../components';

const Line = () => (
 <div className=" container flex justify-center">

<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl  w-3/4">
    <ChartsHeader className=' w-3/4' category="Earnings" title="Earnings Percentage Growth" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>

 </div>
);

export default Line;
