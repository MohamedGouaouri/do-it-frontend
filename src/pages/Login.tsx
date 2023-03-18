
import { Link } from "react-router-dom"
import Button from "../components/shared/Button"

const Login = () => {
    return <>
        <Button Child={() => <Link to="/">Login</Link>} />
    </>
}

export default Login