import { observable } from 'mobx';
import { createContext } from 'react';


type Routes = "WorkoutHistoy" | "CurrentWorkout";

class RouterStore {
  @observable screen: Routes = "WorkoutHistoy";
}

export const RouterStoreContext = createContext(new RouterStore())