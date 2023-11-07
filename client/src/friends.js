import friends from "./friends.json";

const imgObjs = [
  'marc.jpg',
  'mark.jpg',
  'nicole.jpg',
  'suzannah.jpg',
  'richard.jpg',
  'tree.jpg'
].map(src => {
  const img = new Image();
  img.src = `../assets/${src}`;
  return img;
});

const friendsCopy = friends;
friendsCopy.nodes.forEach((node, idx) => {
  node.img = imgObjs[idx];
});

export default friendsCopy;