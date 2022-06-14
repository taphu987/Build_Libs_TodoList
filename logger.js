export default function withLogger(reducer) {
  return function (prevState, action, args) {
    console.group(action);
    console.log("Prev State:", prevState);
    console.log("Action Arguments:", args);
    const nextState = reducer(prevState, action, args);

    console.log("Next State:", nextState);
    console.groupEnd();
    return nextState;
  };
}
