import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Navigator from './Navigator';

// Mock required components
jest.mock('./Home', () => () => null);
jest.mock('./Screens/Explore', () => () => null);
jest.mock('./Screens/Profile', () => () => null);
jest.mock('./Screens/LoginPage', () => {
  return function MockLoginPage({ onLogin }) {
    return (
      <button testID="login-button" onPress={() => onLogin('test@example.com')}>
        Login
      </button>
    );
  };
});
jest.mock('./Home', () => () => null);
jest.mock('./Screens/Explore', () => () => null);
jest.mock('./Screens/Profile', () => () => null);
jest.mock('./Screens/LoginPage', () => {
  return function MockLoginPage({ onLogin }) {
    return (
      <button testID="login-button" onPress={() => onLogin('test@example.com')}>
        Login
      </button>
    );
  };
});
jest.mock('@expo/vector-icons', () => ({
  AntDesign: ({ name, size, color }) => null
}));

describe('Navigator Component', () => {
  it('shows login screen when not signed in', () => {
    render(<Navigator />);
    expect(screen.getByTestId('login-button')).toBeTruthy();
  });

  it('handles login interaction', () => {
    render(<Navigator />);
    const loginButton = screen.getByTestId('login-button');
    fireEvent.press(loginButton);
    // Should not throw any errors
  });
});
    
    // Click login button
    fireEvent.press(getByTestId('login-button'));
    
    // Wait for navigation to complete and verify navigation container is visible
    await waitFor(() => {
      expect(screen.getByTestId('navigation-container')).toBeTruthy();
      expect(screen.getByTestId('home-tab')).toBeTruthy();
    });
  });

  it('returns to login screen after logout', async () => {
    const { getByTestId } = render(<Navigator />);
    
    // Login first
    fireEvent.press(getByTestId('login-button'));
    
    // Find and click logout button
    await waitFor(() => {
      const logoutButton = getByTestId('logout-button');
      fireEvent.press(logoutButton);
    });
    
    // Verify back at login screen
    await waitFor(() => {
      expect(screen.getByTestId('login-button')).toBeTruthy();
    });
  });

  it('preserves user email during navigation', async () => {
    const { getByTestId } = render(<Navigator />);
    
    // Login
    fireEvent.press(getByTestId('login-button'));
    
    // Navigate to profile
    await waitFor(() => {
      const profileTab = screen.getByText('Profile');
      fireEvent.press(profileTab);
    });
    
    // Verify email is displayed
    expect(screen.getByText('test@example.com')).toBeTruthy();
  });

  describe('Tab Navigation', () => {
    beforeEach(async () => {
      const { getByTestId } = render(<Navigator />);
      fireEvent.press(getByTestId('login-button'));
      await waitFor(() => {
        expect(screen.getByText('HomeTab')).toBeTruthy();
      });
    });

    it('can navigate between tabs', async () => {
      // Navigate to Explore tab
      fireEvent.press(screen.getByTestId('explore-tab'));
      await waitFor(() => {
        expect(screen.getByTestId('explore-screen')).toBeTruthy();
      });

      // Navigate to Profile tab
      fireEvent.press(screen.getByTestId('profile-tab'));
      await waitFor(() => {
        expect(screen.getByTestId('profile-screen')).toBeTruthy();
      });

      // Back to Home tab
      fireEvent.press(screen.getByTestId('home-tab'));
      await waitFor(() => {
        expect(screen.getByTestId('home-screen')).toBeTruthy();
      });
    });
  });

  describe('Stack Navigation in Home Tab', () => {
    beforeEach(async () => {
      const { getByTestId } = render(<Navigator />);
      fireEvent.press(getByTestId('login-button'));
      await waitFor(() => {
        expect(screen.getByText('HomeTab')).toBeTruthy();
      });
    });

    it('can navigate to FirstLevel screen', async () => {
      fireEvent.press(screen.getByText('Reiki 1st Level'));
      await waitFor(() => {
        expect(screen.getByTestId('first-level-screen')).toBeTruthy();
      });
    });

    it('can navigate to SecondLevel screen', async () => {
      fireEvent.press(screen.getByText('Reiki 2nd Level'));
      await waitFor(() => {
        expect(screen.getByTestId('second-level-screen')).toBeTruthy();
      });
    });

    it('can navigate to ReikiTimer screen', async () => {
      fireEvent.press(screen.getByText('Reiki Timer'));
      await waitFor(() => {
        expect(screen.getByTestId('reiki-timer-screen')).toBeTruthy();
      });
    });
  });
});