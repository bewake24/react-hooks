### Syntax for useEffect

```javascript
useEffect(() => {}, []);
```

### 3 parts of useEffect

```jsx
useEffect(() => {
  //1. Code to run
  console.log("Count: " + count);

  return () => {
    //2. Optional Cleanup function
    console.log("I'm being cleanedup"); //
  };
}, [count]); //3. Dependency array
```

1. The actual code to run

   - UseEffect is guaranteed to run at least once independent of what you have provided in the dependency array and that is when component mounts.

2. Optional return function : Cleans up the effect

   - Runs when dependency is changed
   - When no dependancy is provided in the arry then cleanup function will run every time when compunent unmounts.
   - eg. when `timeout`, `interval` is used

3. The dependency array

   - It tells what it shoud listen to or what variable it should react to.
   - e.g. when `count` changes
   - If empty array is passed useEffect will run only once and that is when component mounts.
   - Whenever dependency in dependency array changes, useEffect will destroy itself and run again.
