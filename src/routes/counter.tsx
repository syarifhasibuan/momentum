import { useReducer } from "react";

import { HeadingOne } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export const reducerCounter = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
};

export function CounterRoute() {
  const [state, dispatch] = useReducer(reducerCounter, { count: 0 });

  return (
    <div className="flex flex-col items-center space-y-4">
      <HeadingOne>Counter</HeadingOne>

      <p className="text-center p-2 pt-0">
        A simple counter app to demonstrate the use of useReducer hook.
      </p>

      <div className="flex gap-2">
        <Button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </Button>
        <Button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </Button>
        <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
      </div>

      <p className="text-center p-2 pt-0">count: {state.count}</p>
    </div>
  );
}
