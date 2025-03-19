"use client";

import Link from "next/link"
import { signIn } from "next-auth/react"

const ButtonLogin = ({ session, extraStyle}) => {
  const dashboardUrl = "/dashboard";


    if (session) {
      return (
      <Link href={dashboardUrl}
       className={`btn btn-soft btn-secondary ${extraStyle ? extraStyle : ""}`}>
        <p>Welcome back {session.user.name || "friend"} </p>
      </Link>
      )
    }
      return (
      <button className={`btn btn-soft btn-secondary ${extraStyle ? extraStyle : ""}`}
      onClick={() => {
        signIn(undefined, { callbackUrl: dashboardUrl });
      } }
      >
        Créer un compte
        </button>
      );
  };

export default ButtonLogin
