export default function AndOr(){

    // Conditional rendering

    // let var1 = true;

    // function showBoolean(params) {
    //     return `Result : ${params}`;
    // }

    // console.log(var1 ? showBoolean(true) : showBoolean(false));
    

    let id=1;
    let name="mayur" ;
    let rating=10;

    const emp1 = {
        id:id,
        name:name,
        rating: rating
    }

    // shortHand property for obj emp1
    const emp2 = {id, name, rating, description:"Employee" }
    console.log('Emp1: ', emp2);
    
    // Object destructuring
    let {description} = emp2;
    console.log(description);

    const arr = [1,2,3,4,5]
    let firstVal = arr[0]; //OR
    [firstVal] = arr;

    // default function params
    function multiply(num1 = 1, num2 = 2) {
        console.log(num1, num2);
        
        // return num1 * num2;
    }
    
    multiply(10,20);
    multiply()

    // Spread Operator
    const arr2 = [1,2,3];
    const arr3 = [10,20];

    console.log([...arr2])
    console.log([...arr2, ...arr3])
    console.log([...arr2, 999, ...arr3])

    //rest parameter
    function getInfo(a, ...arr) {
        console.log(a, arr)
    }

    getInfo(1,2,3,4,5,6,7)
    
}