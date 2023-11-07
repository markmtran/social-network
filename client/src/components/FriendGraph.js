import ForceGraph from "react-force-graph-2d";
import friendData from "../friends.json";

const FriendGraph = () => {
  return(
    <ForceGraph
      graphData={friendData}
      nodeCanvasObject={(node, ctx, globalScale) => {
        const size = 12
        const img = new Image()

        img.onload = () => {
          const width = size;
          const height = (size * img.height) / img.width; // Maintain aspect ratio

          // Draw the image on the canvas
          ctx.drawImage(img, node.x - width / 2, node.y - height / 2, width, height);
        }

        img.src = node.img
      }}
    />
  )
}

export default FriendGraph;