import {handlers} from "@/auth"
import Resend  from "next/auth/providers/resend";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/app/libs/mongo"

const config = {
  providers: [
    Resend({
      apiKey: process.env.RESEND_KEY,
      from: "noreply@resend.vertiwebp.com",
    })
  ],
  adapter : MongoDBAdapter(clientPromise)
};

export const { GET, POST } = handlers
