import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style';

const WithSpinner = WarappedComponent => {
  const Spinner = ({ isLoading, ...otherProps}) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WarappedComponent {...otherProps} />
    )
  };

  return Spinner;
};

export default WithSpinner;