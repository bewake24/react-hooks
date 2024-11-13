const array = new Array(3000000).fill(7).map((_, i) => {
  return {
    id: i,
    isSelected: i === 2999999,
  };
});

export default array;
