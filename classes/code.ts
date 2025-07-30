class CanvasNode {
    readonly x: number
    readonly y:  number
    constructor(){
        this.x = 14;
        this.y = 10; 
    }
}


const canvasNode = new CanvasNode()
// @ts-expect-error Property is readonly
  canvasNode.x = 10;

  // @ts-expect-error Property is readonly
  canvasNode.y = 20;