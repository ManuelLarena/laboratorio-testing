import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as promiseTracker from 'react-promise-tracker/lib/trackerHook';

describe('SpinnerComponent component specs', () => {
  it('should promiseTracker equal to true when the component is render', () => {
    // Arrange
    const usePromiseTrackerStub = jest.spyOn(
      promiseTracker,
      'usePromiseTracker'
    );

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(usePromiseTrackerStub).toHaveBeenCalled();
    expect(usePromiseTrackerStub).toBeTruthy();
  });
});
