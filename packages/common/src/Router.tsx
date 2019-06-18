import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { CurrentWorkout } from "./moddules/CurrentWorkout";
import { WorkoutHistory } from "./moddules/WorkoutHistory";
import { RouterStoreContext } from "./stores/RouterStore";



export const Router = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  return routerStore.screen === "WorkoutHistoy" ? (
    <WorkoutHistory />
  ) : (
      <CurrentWorkout />
    );

});