export default function ES6ArrayMethods() {
    const personArray = [
        {
            name:"Person1",
            age:50,
            country:"India"
        },
        {
            name:"Person4",
            age:30,
            country:"India"
        },
        {
            name:"Person2",
            age:32,
            country:"China"
        },
        {
            name:"Person3",
            age:30,
            country:"Russia"
        },
    ];

    // map function
    let getAllNames = personArray.map((e, index)=>{
        // console.log(e.name, index)
        return e.name;
    })

    console.log("getAllNames",getAllNames)

    // find function = incase of duplicasy returns first found val
    let getSinglePerson = personArray.find((e)=>{
        return e.country === "India"
    })

    console.log("getSinglePerson", getSinglePerson)


    // filter = incase of duplicasy returns all found vals
    let getAllSearch = personArray.filter(e=>
       e.country.toUpperCase().includes("India".toUpperCase())
    )

    console.log("getAllSearch", getAllSearch)

    // returns true if any element satisfy condition
    let checkIfAnyElmntSatisfy = personArray.some(e=>{
        return e.age > 40;
    })

    console.log(checkIfAnyElmntSatisfy)

    // returns true all elements satisfies condition
    let checkIfAllElmntSatisfy = personArray.every(e=>{
        return e.age > 20;
    })

    console.log(checkIfAllElmntSatisfy) //change into main
};