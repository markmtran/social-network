import ForceGraph from 'force-graph';

const FriendGraph = () => {
  const imgs = [
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

  // Random connected graph
  const gData = {
    nodes: imgs.map((img, id) => ({ id, img })),
    links: [...Array(imgs.length).keys()]
      .filter(id => id)
      .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id - 1))
      }))
  };

  const Graph = ForceGraph()
    (document.getElementById('graph'))
    .nodeCanvasObject(({ img, x, y }, ctx) => {
      const size = 12;
      ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
    })
    .nodePointerAreaPaint((node, color, ctx) => {
      const size = 12;
      ctx.fillStyle = color;
      ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size); // draw square as pointer trap
    })
    .graphData(gData);

  return (
    <div id="graph" />
  )
};

export default FriendGraph;