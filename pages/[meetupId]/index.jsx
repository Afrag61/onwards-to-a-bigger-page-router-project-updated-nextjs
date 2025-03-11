import MeetupDetail from "@/components/meetups/MeetupDetail";
import { print } from "@/Print";

const MeetupDetails = () => {
  return (
    <>
      <MeetupDetail
        title={"A First Meetup"}
        image={
          "https://alumni.ubc.ca/wp/wp-content/uploads/MyTownMeetups-1270x460-1.jpg"
        }
        address={"Some Address 5, 12345 Some City"}
        description={"this is A First Meetup"}
      />
    </>
  );
};

export const getStaticProps = async (context) => {
  // fetch data from api
  const meetupId = context.params.meetupId;

  print(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        image:
          "https://alumni.ubc.ca/wp/wp-content/uploads/MyTownMeetups-1270x460-1.jpg",
        address: "Some Address 5, 12345 Some City",
        description: "",
      },
    },
  };
};

export default MeetupDetails;
