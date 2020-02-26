// 逆序和个数必须为偶数,方能拼成原图
const puzzleList = [
    [5, 4, 7, 3, 1, 6, 2, 8],
    [5, 3, 1, 7, 4, 8, 2, 6],
    [6, 2, 1, 3, 5, 4, 8, 7],
    [5, 8, 2, 7, 6, 3, 4, 1],
    [6, 1, 4, 8, 7, 2, 3, 5],
    [7, 2, 8, 1, 5, 3, 4, 6],
    [8, 3, 2, 7, 6, 1, 5, 4],
    [2, 7, 8, 3, 6, 1, 5, 4],
    [7, 4, 3, 2, 5, 1, 8, 6],
    [3, 4, 1, 7, 5, 6, 8, 2],
    [6, 1, 3, 8, 5, 2, 4, 7],
    [2, 1, 3, 5, 6, 8, 7, 4],
    [2, 8, 1, 6, 3, 7, 4, 5],
    [7, 6, 1, 5, 4, 8, 2, 3],
    [8, 4, 7, 2, 6, 3, 1, 5],
    [5, 7, 8, 6, 4, 3, 2, 1],
    [6, 7, 4, 5, 1, 3, 8, 2],
    [4, 1, 2, 3, 7, 5, 8, 6],
    [8, 6, 2, 5, 1, 7, 3, 4],
    [6, 8, 4, 2, 3, 7, 1, 5],
    [1, 8, 7, 4, 6, 2, 3, 5],
    [2, 6, 5, 3, 8, 1, 4, 7],
    [7, 3, 8, 5, 6, 2, 1, 4],
    [5, 7, 8, 1, 4, 3, 6, 2],
    [5, 6, 8, 3, 1, 7, 4, 2],
    [5, 7, 2, 6, 1, 3, 8, 4],
    [4, 5, 3, 1, 8, 6, 2, 7],
    [5, 8, 7, 2, 6, 4, 3, 1],
    [8, 7, 5, 2, 3, 1, 6, 4],
    [4, 8, 6, 2, 3, 7, 5, 1],
    [4, 1, 2, 6, 7, 3, 8, 5],
    [3, 6, 7, 5, 4, 1, 8, 2],
    [7, 8, 6, 5, 2, 3, 4, 1],
    [7, 5, 4, 3, 6, 1, 8, 2],
    [5, 8, 4, 3, 6, 2, 1, 7],
    [2, 7, 6, 5, 8, 1, 3, 4],
    [4, 1, 5, 2, 6, 8, 3, 7],
    [2, 1, 8, 7, 4, 3, 6, 5],
    [5, 3, 2, 1, 8, 4, 6, 7],
    [8, 2, 1, 4, 7, 3, 5, 6],
    [1, 4, 6, 5, 8, 3, 7, 2],
    [5, 8, 6, 3, 2, 4, 1, 7],
    [6, 4, 8, 2, 7, 5, 3, 1],
    [7, 1, 6, 4, 5, 3, 8, 2],
    [2, 1, 4, 7, 5, 6, 8, 3],
    [6, 7, 2, 4, 5, 8, 3, 1],
    [6, 5, 8, 3, 7, 4, 2, 1],
    [5, 1, 4, 6, 8, 3, 2, 7],
    [8, 4, 5, 2, 1, 6, 7, 3],
    [5, 2, 4, 6, 1, 7, 3, 8],
    [3, 1, 6, 8, 7, 5, 2, 4],
    [3, 7, 5, 8, 1, 4, 6, 2],
    [3, 8, 6, 1, 2, 4, 5, 7],
    [5, 1, 8, 2, 7, 3, 4, 6],
    [7, 5, 4, 2, 3, 1, 8, 6],
    [8, 3, 5, 1, 7, 4, 2, 6],
    [6, 7, 4, 2, 8, 3, 1, 5],
    [2, 1, 5, 7, 4, 3, 8, 6],
    [1, 6, 2, 7, 5, 8, 4, 3],
    [5, 6, 8, 7, 3, 1, 4, 2],
    [8, 6, 3, 2, 5, 4, 1, 7],
    [7, 6, 1, 8, 2, 3, 5, 4],
    [3, 6, 5, 8, 4, 2, 1, 7],
    [2, 4, 1, 3, 5, 7, 6, 8],
    [3, 2, 1, 8, 5, 6, 7, 4],
    [6, 7, 4, 8, 2, 3, 5, 1],
    [3, 8, 5, 7, 6, 1, 2, 4],
    [5, 6, 8, 3, 4, 7, 2, 1],
    [1, 7, 5, 2, 8, 6, 4, 3],
    [2, 4, 1, 3, 8, 7, 5, 6],
    [6, 1, 5, 3, 8, 2, 4, 7],
    [7, 3, 6, 1, 8, 2, 5, 4],
    [6, 5, 1, 7, 2, 4, 8, 3],
    [5, 1, 8, 6, 2, 7, 3, 4],
    [4, 7, 5, 2, 8, 1, 6, 3],
    [8, 7, 6, 1, 4, 3, 5, 2],
    [5, 4, 2, 8, 6, 7, 1, 3],
    [2, 4, 1, 5, 3, 8, 6, 7],
    [5, 1, 2, 6, 8, 4, 3, 7],
    [5, 7, 1, 2, 3, 6, 4, 8],
    [7, 2, 4, 5, 3, 1, 6, 8],
    [2, 4, 3, 1, 5, 7, 8, 6],
    [4, 5, 1, 3, 8, 7, 2, 6],
    [1, 4, 3, 6, 2, 5, 8, 7],
    [8, 2, 3, 6, 4, 5, 1, 7],
    [1, 5, 2, 6, 3, 7, 4, 8],
    [3, 5, 8, 7, 1, 4, 6, 2],
    [3, 8, 6, 5, 1, 7, 4, 2],
    [8, 3, 4, 2, 5, 6, 1, 7],
    [2, 5, 7, 8, 3, 4, 1, 6],
    [2, 3, 6, 5, 8, 7, 1, 4],
    [7, 6, 5, 3, 2, 8, 1, 4],
    [3, 6, 1, 4, 7, 5, 2, 8],
    [1, 4, 3, 5, 6, 2, 8, 7],
    [8, 2, 6, 4, 3, 7, 5, 1],
    [8, 7, 2, 5, 4, 1, 6, 3],
    [8, 5, 7, 2, 4, 1, 6, 3],
    [3, 1, 6, 8, 7, 2, 4, 5],
    [4, 3, 6, 5, 8, 7, 2, 1]
];
const getRandom = function(list) {
    return list[Math.floor(Math.random() * list.length)]
    // return [1, 2, 3, 4, 5, 6, 7, 8]
}

let instance

export default class GameMap {
    constructor(){
        if (instance)
            return instance

        instance = this
    }
    getMap(){

          return getRandom(puzzleList);          
        }
    }