import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "@/components/meetups/MeetupDetail";
import { print } from "@/Print";

const MeetupDetails = ({ meetupData }) => {
  const { id, title, image, address, description } = meetupData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupDetail
        title={title}
        image={image}
        address={address}
        description={description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://afrag166:012722537853799A@cluster1.ttvkv.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster1"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(({ _id }) => {
      const id = _id.toString();

      return {
        params: {
          meetupId: id,
        },
      };
    }),
  };
};

export const getStaticProps = async ({ params }) => {
  // fetch data from api
  const { meetupId } = params;

  const client = await MongoClient.connect(
    "mongodb+srv://afrag166:012722537853799A@cluster1.ttvkv.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster1"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const { _id, title, address, image, description } =
    await meetupsCollection.findOne({
      _id: new ObjectId(meetupId),
    });

  return {
    props: {
      meetupData: {
        id: _id.toString(),
        title,
        address,
        image,
        description,
      },
    },
  };
};

export default MeetupDetails;
