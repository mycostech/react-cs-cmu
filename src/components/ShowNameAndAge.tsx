interface ShowNameAndAgeProps {
    name: string
    age: number
}

function ShowNameAndAge({name, age}
    : ShowNameAndAgeProps) {

    return <div>
        <h1>My name is {name}</h1>
        <h1>My Age: {age}</h1>
    </div>
}


export default ShowNameAndAge