// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


//1
export function Size (width,height){
    this.width = width !== undefined ? width : 80;
    this.height = height !== undefined ? height : 60;
}

Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

//2 
export function Position (x,y) {
    this.x = x !== undefined ? x : 0;
    this.y = y !== undefined ? y : 0;
}

Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}

//3
export class ProgramWindow {
    constructor (){
        this.screenSize = new Size(800,600);
        this.size = new Size();
        this.position = new Position();
    }
    //4
    resize(newSize) {
        // Ensure minimum size of 1x1
        let width = Math.max(1, newSize.width);
        let height = Math.max(1, newSize.height);

        // Ensure window does not exceed screen bounds
        width = Math.min(width, this.screenSize.width - this.position.x);
        height = Math.min(height, this.screenSize.height - this.position.y);

        this.size.resize(width, height);
    }
    //5
    move(newPosition){
        //smallest position check
        let x = Math.max(0, newPosition.x);
        let y = Math.max(0, newPosition.y);

        //maximum position check
        if (x > this.screenSize.width - this.size.width){
            x = this.screenSize.width - this.size.width;
        }
        if (y > this.screenSize.height - this.size.height){
            y = this.screenSize.height - this.size.height;
        }

        this.position.move(x, y);
    }
}

export function changeWindow(z){
    z.move(new Position(0, 0));
    z.resize(new Size(400, 300));
    z.move(new Position(100, 150));
    return z;
}

