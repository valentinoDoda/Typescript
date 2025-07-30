// class CanvasNode {
//     readonly x: number
//     readonly y:  number
//     constructor(){
//         this.x = 14;
//         this.y = 10; 
//     }
// }


// const canvasNode = new CanvasNode()
// // @ts-expect-error Property is readonly
//   canvasNode.x = 10;

//   // @ts-expect-error Property is readonly
//   canvasNode.y = 20;


class CanvasNode {
  x = 0;
  y = 0;
    move(x: number, y: number){
this.x = x;
this.y = y;
}
}


const canvasNode = new CanvasNode();

canvasNode.move(10, 20);
