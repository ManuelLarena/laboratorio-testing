import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent component specs', () => {
  it('should be rendered as expected passing required properties', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: 'test Close',
        acceptButton: 'test Accept',
      },
      children: '<p>test description</p>',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const titleElement = screen.getByRole('heading', {
      name: props.title,
    });
    const childrenElement = screen.getByText(props.children);
    const closeLabel = screen.getByRole('button', {
      name: props.labels.closeButton,
    });
    const acceptLabel = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('test title');
    expect(childrenElement).toBeInTheDocument();
    expect(childrenElement).toHaveTextContent('test description');
    expect(closeLabel).toBeInTheDocument();
    expect(closeLabel).toHaveTextContent('test Close');
    expect(acceptLabel).toBeInTheDocument();
    expect(acceptLabel).toHaveTextContent('test Accept');
  });

  it('should call onClick property when it clicks on accept button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: 'test Close',
        acceptButton: 'test Accept',
      },
      children: '<p>test description</p>',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const handleOnAccept = screen.getByRole('button', {
      name: 'test Accept',
    });
    userEvent.click(handleOnAccept);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
  });

  it('should call onClick property when it clicks on cancel button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: 'test Close',
        acceptButton: 'test Accept',
      },
      children: '<p>test description</p>',
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const handleOnAccept = screen.getByRole('button', {
      name: 'test Close',
    });
    userEvent.click(handleOnAccept);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });
});
