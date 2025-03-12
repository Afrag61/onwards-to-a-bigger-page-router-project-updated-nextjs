import { MongoClient } from "mongodb";

import MeetupList from "@/components/meetups/MeetupList";
import { print } from "@/Print";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://alumni.ubc.ca/wp/wp-content/uploads/MyTownMeetups-1270x460-1.jpg",
    address: "Some Address 5, 12345 Some City",
    description: "this is A First Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://8147776.fs1.hubspotusercontent-na1.net/hubfs/8147776/DIS_InGameAdvertising_Blog_WebHeader.jpg",
    address: "Some Address 64, 11999 Some City",
    description: "this is A Second Meetup",
  },
];

const HomePage = ({ meetups }) => {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  // fetch data from api

  const client = await MongoClient.connect(
    "mongodb+srv://afrag166:012722537853799A@cluster1.ttvkv.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster1"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        const { title, address, image, _id } = meetup;
        const id = _id.toString();
        return {
          title,
          address,
          image,
          id,
        };
      }),
    },
    revalidate: 1,
  };
};

// export const getServerSideProps = (context) => {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from api

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
