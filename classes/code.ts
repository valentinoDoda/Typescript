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

// Your challenge is to modify the CanvasNode class so that it can receive
//  an optional initial position. This will require you to add a constructor that can accept an argument.