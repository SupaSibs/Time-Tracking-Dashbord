import { Fragment, component$, h, useStore } from "@builder.io/qwik";

export const Index = component$((props) => {
  const state = useStore({ time: "daily" });

  return (
    <Fragment>
      Report for Jeremy Robson
      <button onClick$={(event) => (state.time = "daily")}>Daily</button>
      <button onClick$={(event) => (state.time = "weekly")}>Weekly</button>
      <button onClick$={(event) => (state.time = "monthly")}>Monthly</button>
      Work 5hrs Previous - 7hrs 32hrs Previous - 36hrs 103hrs Previous - 128hrs
      Play 1hr Previous - 2hrs 10hrs Previous - 8hrs 23hrs Previous - 29hrs
      Study 0hrs Previous - 1hr 4hrs Previous - 7hrs 13hrs Previous - 19hrs
      Exercise 1hr Previous - 1hr 4hrs Previous - 5hrs 11hrs Previous - 18hrs
      Social 1hr Previous - 3hrs 5hrs Previous - 10hrs 21hrs Previous - 23hrs
      Self Care 0hrs Previous - 1hr 2hrs Previous - 2hrs 7hrs Previous - 11hrs{" "}
    </Fragment>
  );
});

export default Index;
