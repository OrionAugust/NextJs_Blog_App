import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Insufficient Inputs" });
    }

    const newMessage = {
      email: email,
      name: name,
      message: message,
    };

     
    
     

    try {
        const client = await MongoClient.connect(
            "mongodb+srv://santhosh:MkY4TOlGlHMgSrKp@cluster0.dr7gtl6.mongodb.net/blogs?retryWrites=true&w=majority&appName=Cluster0");
         
        const db = await client.db();
      await db.collection("messages").insertOne(newMessage);
    } catch (error) {
      res.status(500).json({ message: "Storing message faild" });
      return;
    }
    console.log(newMessage);

    res.status(201).json({ message: "Successfully stored Message" });
  }
}
