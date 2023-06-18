interface IJob {
    position: string
    company: string
}

interface ICar {
    brand: string
    model: string
    year: number
}

interface IUser {
    name: string
    age: number
    isDead: boolean
    job: IJob
    cars: ICar[]
    // cars
}

interface ShowUserJSONProps {
    user: IUser
}
function ShowUserJSON({user}: ShowUserJSONProps) {
    console.log('user:', user)
    return <div>

    </div>
}

export default ShowUserJSON