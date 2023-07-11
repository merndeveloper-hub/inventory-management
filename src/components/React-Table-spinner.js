import React from 'react';
import { Oval } from 'react-loader-spinner';

function ReactTableSpinner() {
  return (
    <Oval
      height="70"
      width="70"
      radisu={1}
      color="#2065D1"
      ariaLabel="puff-loading"
      secondaryColor="#d4d4d4"
      wrapperStyle={{}}
      wrapperClass=""
      // cssOverride={{ display: 'block', margin: 'auto', justifyContent: 'center' }}
      visible={true}
    />
  );
}

export default ReactTableSpinner;
