import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
 <div className="container">
   <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl w-3/4">
    <ChartsHeader category="Registrations" title="User Registrations Graph" className=' w-3/4' />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
 </div>
);

export default Stacked;
