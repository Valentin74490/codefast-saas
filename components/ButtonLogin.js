import Link from "next/link"
import { Children } from "react";

const ButtonLogin = ({isLoggedIn, name}) => {

    if (isLoggedIn) {
      return (
      <Link href="/dashboard" className="btn btn-soft btn-secondary">
        <p>Welcome back {name} </p>
      </Link>
      )
    }
      return <button>Login</button>
  };

export default ButtonLogin
