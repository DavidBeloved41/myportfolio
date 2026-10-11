import { useId } from "react";
import type { ArchitectureDiagramData } from "@/data/architecture";

const statusLabels = {
  source: "SOURCE EVIDENCE",
  planned: "PLANNED",
  unknown: "NOT SOURCE VERIFIED",
};

export function ArchitectureDiagram({ diagram }: { diagram: ArchitectureDiagramData }) {
  const markerId = `architecture-arrow-${useId().replaceAll(":", "")}`;
  const titleId = `${markerId}-title`;
  const descriptionId = `${markerId}-description`;

  return (
    <svg
      aria-labelledby={`${titleId} ${descriptionId}`}
      className="architecture-svg"
      role="img"
      viewBox={`0 0 ${diagram.width} ${diagram.height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{diagram.title}</title>
      <desc id={descriptionId}>{diagram.summary}</desc>
      <defs>
        <marker
          id={markerId}
          markerHeight="8"
          markerWidth="8"
          orient="auto-start-reverse"
          refX="7"
          refY="4"
          viewBox="0 0 8 8"
        >
          <path className="architecture-arrow-head" d="M0 0 8 4 0 8z" />
        </marker>
      </defs>
      <rect className="architecture-canvas" height={diagram.height} width={diagram.width} />
      {diagram.boundary && (
        <g>
          <rect
            className="architecture-boundary"
            height={diagram.boundary.height}
            rx="10"
            width={diagram.boundary.width}
            x={diagram.boundary.x}
            y={diagram.boundary.y}
          />
          <text
            className="architecture-boundary-title"
            x={diagram.boundary.x + 20}
            y={diagram.boundary.y + 26}
          >
            {diagram.boundary.title}
          </text>
        </g>
      )}
      {diagram.edges.map((edge) => (
        <g key={edge.id}>
          <path
            className="architecture-edge"
            d={edge.path}
            markerEnd={`url(#${markerId})`}
            markerStart={edge.direction === "both" ? `url(#${markerId})` : undefined}
          />
          {edge.label && <text className="architecture-edge-label" x={edge.labelX} y={edge.labelY}>{edge.label}</text>}
        </g>
      ))}
      {diagram.nodes.map((node) => (
        <g className={`architecture-node architecture-node-${node.status}`} key={node.id}>
          <rect height={node.height} rx="8" width={node.width} x={node.x} y={node.y} />
          <text className="architecture-node-title" x={node.x + 16} y={node.y + 26}>
            {node.title}
          </text>
          <text className="architecture-node-status" x={node.x + 16} y={node.y + 47}>
            {statusLabels[node.status]}
          </text>
          {node.lines.map((line, index) => (
            <text
              className="architecture-node-line"
              key={`${node.id}-${line}`}
              x={node.x + 16}
              y={node.y + 70 + index * 18}
            >
              {line}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}