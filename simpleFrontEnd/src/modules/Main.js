import {CreateUser} from "./CreateUser";
import {FindUser} from "./FindUser";

function Main() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello Academy!</h1>
                <h2>
                    This is a simple webpage
                </h2>
            </header>
            <FindUser/>
            <br/>
            <CreateUser/>
            <br/>
        </div>
    )
}

export {Main}