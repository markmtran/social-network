import { useEffect, useState } from "react";
import ForceGraph from "react-force-graph-2d";
//import friendData from "../friends.json";

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

const friendData = generateRandomGraph(50);

const FriendGraph = () => {
  const [imageCache, setImageCache] = useState([]);

  const handleDrawNodeImg = (node, ctx) => {
    const size = 12;
    const img = new Image();

    img.onload = () => {
      const width = size;
      const height = (size * img.height) / img.width; // Maintain aspect ratio

      // Draw the image on the canvas
      ctx.drawImage(img, node.x - width / 2, node.y - height / 2, width, height);

    }

    img.src = node.img;
  }

  return (
    // <ForceGraph
    //   graphData={friendData}
    //   nodeLabel={(node) => node.name}
    //   linkDirectionalArrowLength={6}
    //   linkDirectionalArrowRelPos={1}
    //   nodeCanvasObject={(node, ctx) => handleDrawNodeImg(node, ctx)}
    //   nodePointerAreaPaint={(node, color, ctx) => {
    //     const size = 12;
    //     ctx.fillStyle = color;
    //     ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size);
    //   }}
    // />
    <ForceGraph 
      graphData={friendData}
      linkDirectionalArrowLength={6}
      linkDirectionalArrowRelPos={1}
    />
  )
}

export default FriendGraph;