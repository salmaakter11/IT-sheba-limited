import React, { Suspense } from 'react';
import { Helmet } from "react-helmet";

const AttendanceMachineInfo = React.lazy(() => import('./AttendanceMachineInfo'));
const MachinePackege = React.lazy(() => import('./MachinePackege'));


const AttendanceMachine = () => {
  return (
    <>
      <div className="main">
        <Helmet>
          <title>Attendance Machine</title>
        </Helmet>

        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
          <AttendanceMachineInfo />
        </Suspense>

        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
          <MachinePackege />
        </Suspense>
      </div>
    </>
  );
};

export default AttendanceMachine;
