import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { RouterStoreContext } from '../stores/RouterStore';

interface Props {

}

export const CurrentWorkout: React.FC<Props> = () => {
  const routerStore = React.useContext(RouterStoreContext);

  return (
    <View>
      <Text>Current Workout Page</Text>
      <Button title="Workout History" onPress={
        () => {
          routerStore.screen = "WorkoutHistoy"
        }}
      />
    </View>
  );
};