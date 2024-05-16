import React from 'react';
import { Helmet } from "react-helmet";
import MachinePackege from './MachinePackege';
import AttendanceMachineInfo from './AttendanceMachineInfo';

const AttendanceMachine = () => {
  return (
    <>

      <div className="main">
      <Helmet>
          <title>Attendance Machine</title>
        </Helmet>
        <AttendanceMachineInfo />
        <MachinePackege />

      </div>

    </>
  );
};

export default AttendanceMachine;