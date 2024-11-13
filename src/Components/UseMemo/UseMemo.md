### useMemo

### Syntax

```javascript
useMemo(() => {
  // Code to run
}, []); // Dependency array
```

```javascript
const selectedItem = useMemo(() => item.find((i) => i.isSelected), [items]);
```

- In react to update something (component or state of component) means you have to trigger a rerender of the entire component.

- useMemo is a Hook which memoises a value and returns the same value until any of of the dependencies in dependency array is changes. After finding a change it will rum the code again and return the new value.
