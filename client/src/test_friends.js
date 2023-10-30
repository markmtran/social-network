const friendGraph = {
  friend1: ['friend3', 'friend4', 'friend6'],
  friend2: ['friend1', 'friend3', 'friend4'],
  friend3: ['friend1', 'friend2', 'friend5'],
  friend4: ['friend1', 'friend2', 'friend6'],
  friend5: ['friend3'],
  friend6: ['friend1', 'friend4'],
};

export default friendGraph;