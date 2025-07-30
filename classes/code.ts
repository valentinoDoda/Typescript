class CanvasNode {}


const canvasNode = new CanvasNode
// @ts-expect-error Property is readonly
  canvasNode.x = 10;

  // @ts-expect-error Property is readonly
  canvasNode.y = 20;