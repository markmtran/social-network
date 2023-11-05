import * as d3 from 'd3';
import friendGraph from "./test_friends";
import { Graph } from "react-d3-graph";
import ForceGraph2D from "react-force-graph-2d";

const FriendGraph = () => {

  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",
      size: 120,
      highlightStrokeColor: "blue",
    },
    link: {
      highlightColor: "lightblue",
    },
  };

  return (
    // <Graph
    //   id="graph-id" // id is mandatory
    //   data={friendGraph}
    //   config={myConfig}
    // />
    <ForceGraph2D />
  )
};

export default FriendGraph;