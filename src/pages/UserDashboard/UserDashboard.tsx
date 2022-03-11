import { info } from "console"
import { useContext } from "react"
import { AuthContext } from "../../store/auth-context"

export default function UserDashboard() {

const ctx = useContext(AuthContext)

console.log(ctx)

let user = ctx.activeUser

  return <h1 className="text-center text-white">Hello user</h1>
}