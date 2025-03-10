import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { print } from "@/Print";

const NewMeetupPage = () => {
    const addMeetupHandler = (enteredMeetupData) => {
        print(enteredMeetupData)
    }

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
