import { useEffect, useState } from "react";
//import ForceGraph from "react-force-graph-2d";
import ForceGraph from "force-graph";
import friendData from "../friends.json";

function generateRandomGraph(numNodes) {
  const nodes = Array.from({ length: numNodes }, (_, id) => ({
    id,
    name: `Node ${id}`
  }));

  const links = nodes.map((_, index) => ({
    source: index,
    target: Math.floor(Math.random() * numNodes)
  }));

  return { nodes, links };
}

// const friendData = generateRandomGraph(50);

const FriendGraph = () => {

  useEffect(() => {
    const graphInstance = ForceGraph()(document.getElementById('graph'))
      .nodeCanvasObject((node, ctx) => {
        const size = 12;
        const img = new Image();
        img.onload = () => {
          const width = size;
          const height = (size * img.height) / img.width; // Maintain aspect ratio

          // Draw the image on the canvas
          ctx.drawImage(img, node.x - width / 2, node.y - height / 2, width, height);
        }
        img.src = node.img;
      })
      .graphData(friendData);
  }, [])
  
  return (
    <div id="graph"></div>
  )
}

export default FriendGraph;