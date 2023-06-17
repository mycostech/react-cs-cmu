interface ShowNameAndAgeProps {
    name: string
    age: number
}

function ShowNameAndAge({name, age}
    : ShowNameAndAgeProps) {

    return <div>
        <h1>My name is {name}</h1>
        <h1>My Age: {age}</h1>

        {age > 18 && <h1>Go to Vote</h1> }

        {age > 18 ? <h1>Go to Vote</h1> : <h1>Go to School</h1> }

        {(age > 20 && age <50) && <h1>Go to Pub</h1> }
    </div>
}


export default ShowNameAndAge