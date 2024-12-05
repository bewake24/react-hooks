import React, { useState, memo, useCallback } from "react";
import Header from "../Header";

const ChildComponent = memo(({ buttonName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-pink-500 text-white px-4 py-2 rounded mt-4 ml-4"
    >
      {buttonName}
    </button>
  );
});

function ChildComponentFn({ buttonName, classes }) {
  return <button className={classes}>{buttonName}</button>;
}
const MemoizedChildComponent = memo(ChildComponentFn);

function UseCallback2() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(Math.random());
  const handleClick = useCallback(() => {
    setRandom(Math.random());
  }, []);
  return (
    <>
      <Header title="useCallback2" />
      <div>
        Count: {count} & Random: {random}
      </div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Increament
      </button>

      <ChildComponent buttonName={"Decreament"} onClick={handleClick} />
      <div onClick={() => setCount(count - 1)}>
        <MemoizedChildComponent
          buttonName={"Decreament"}
          classes="bg-green-500 text-white px-4 py-2 rounded mt-4 ml-4"
        />
      </div>
    </>
  );
}

export default UseCallback2;

/* React.memo rerenders the component only when props associated with it are updated this helps in unnecessary re-renders of component. But this also have limitation When we send function then react.memo won't be able to save us from unnecessary re-renders of component beacuse when Parent component re-renders function in parent component is also created again and hence the refrence of function changes. Since we are passing that function to child component the existing function refrence won't match the refernce of new function created. And React.memo will think props have changed and will re-render that child component. To protect from this we can use useCallback hook to memoise the function and not change its refrence whernever parent component re-renders.
 */
