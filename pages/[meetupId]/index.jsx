import MeetupDetail from "@/components/meetups/MeetupDetail";

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

export default MeetupDetails;
