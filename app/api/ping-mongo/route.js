import mongoose from "mongoose";

export async function GET() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    return new Response("❌ La variable MONGO_URI n’est pas définie en prod", { status: 500 });
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 7000, // court timeout pour test
    });

    return new Response("✅ MongoDB connecté depuis Vercel !");
  } catch (err) {
    return new Response("❌ Connexion échouée : " + err.message, { status: 500 });
  }
}
