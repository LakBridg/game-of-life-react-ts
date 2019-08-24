
const createTwoDimensionalArray = function (size: number, value: any = 0) : boolean[][] {
    if (size < 1 || size > 1000)
        throw new Error("The size of the array should be in the range from 1 to 1000, your value: " + size);
    let newArray: Array<any> = new Array( size );
    for (let i = 0; i < size; i += 1)
        newArray[i] = new Array(size).fill(value);
    return newArray;
};

export default createTwoDimensionalArray;