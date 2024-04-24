import { SharedValue } from 'react-native-reanimated';
import { useStackNavigationContext } from '@/state/StackNavigationProvider';
import Header from '../components/Header';

export const useHeaderOptions = (drawerAnimation: SharedValue<number>) => {
  const { selectNavigation } = useStackNavigationContext();

  const options = {
    headerShown: true,
    headerTitle: '',
    headerLeft: () => (
      <Header selectNavigation={selectNavigation} drawerAnimation={drawerAnimation} />
    ),
    headerShadowVisible: false,
  };

  return { options };
};
