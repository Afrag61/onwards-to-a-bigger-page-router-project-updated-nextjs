import { print } from "@/Print";
import { MongoClient } from "mongodb";

//  api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://afrag166:012722537853799A@cluster1.ttvkv.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster1"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    print(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
