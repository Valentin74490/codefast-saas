import Link from "next/link"

const ButtonLogin = ({isLoggedIn, name, extraStyle}) => {
  console.log(extraStyle);


    if (isLoggedIn) {
      return (
      <Link href="/dashboard" className={`btn btn-soft btn-secondary ${extraStyle ? extraStyle : ""}`}>
        <p>Welcome back {name} </p>
      </Link>
      )
    }
      return <button>Login</button>
  };

export default ButtonLogin
