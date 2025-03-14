import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { print } from "@/Print";

const NewMeetupPage = () => {
  const { push } = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredMeetupData),
    });

    const data = await response.json();

    print(data);

    push("/");
  };

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name="description"
          content="add you own meetups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
