//YOUR CODE HERE
class Box {
    constructor(color, capacity){
        this.color=color
        this.capacity=capacity
        this.contents=[]
    }

    pack(color, capacity){
        if (this.contents.length > capacity){
            throw new Error()
        } else {
            this.contents.push(new Box(color, capacity))
        }
    }

    unpack(){
        let colors=[];
        if (!this.contents.length){
            colors.push(this.color)
        } else {
            colors.push(this.color)
            for (let i =0; i<this.contents.length; i++){
                colors.push(...this.contents[i].unpack())
            }
        }
        return colors
    }
}

module.exports = { Box };
