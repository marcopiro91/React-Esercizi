import { UseForm } from "./UseForm";

export function Form() {
    const { username, password, handleInputChange } = UseForm()
    return (
        <form>
            <input type="text" name="username" value={username} onChange={handleInputChange}/>
            <input type="text" name="password" value={password} onChange={handleInputChange}/>
        </form>
    )
}