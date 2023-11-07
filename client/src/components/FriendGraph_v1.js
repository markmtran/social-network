import { useState, useEffect } from 'react';
import ForceGraph2D from "react-force-graph-2d";
import friendsData from '../friends.json'
import ForceGraph from 'react-force-graph-2d';

const FriendGraph = () => {
  useEffect(() => {
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

    const graphData = {
      nodes: img.map((img, id) => ((id, img))),
      links: [...Array(imgs.length).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
    };

    const Graph = ForceGraph();
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
  }, []);
  
  return (
    <ForceGraph2D
      graphData={graphData}
      nodeCanvasObject={(node, ctx, globalScale) => {
        const size = 12;
        const img = new Image(100, 100);
        img.src = node.img;
        
        img.onload = () => {
          ctx.drawImage(img, node.x - size / 2, node.y - size / 2, size, size);
        }; 
      }}
    />
  )
};

export default FriendGraph;