import RootNavigation from '@/Navigation/RootNavigation';
import { StackNavigationProvider } from '@/state/StackNavigationProvider';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <StackNavigationProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </StackNavigationProvider>
  );
};

export default App;
