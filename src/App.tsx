import MatApp from "./components/MatApp"
import ShowUserJSON from "./components/ShowUserJson"
import user from './data/user.json'

function App() {
    return (
       <MatApp>
            <ShowUserJSON user={user} />
       </MatApp>
    )
}

export default App
