import React, { useState } from "react";

import Navbar from "../components/Navbar";
import AnnouncementList from "../components/announcements/AnnouncementList";
import Popup from "../components/popup/Popup";
import AddAnnouncement from "../components/announcements/AddAnnouncement";

import classes from "../components/announcements/Announcements.module.css";

import useAxios from "../services/useAxios";
import moment from "moment"

const Announcements = () => {
  // const loadedAnnouncements = [
  //   {
  //     id: 123456,
  //     date: "2022-11-28",
  //     title: "announcement title #1",
  //     message:
  //       "This is my first announcement  #1. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make",
  //     company: 987654,
  //     user: "User Name",
  //   },
  //   {
  //     id: 123457,
  //     date: "2022-11-28",
  //     title: "announcement title #2",
  //     message:
  //       "This is my second announcement #2. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make.",
  //     company: 987654,
  //     user: "User Name",
  //   },
  //   {
  //     id: 123458,
  //     date: "2022-11-28",
  //     title: "announcement title #3",
  //     message:
  //       "This is my third announcement #3. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make.",
  //     company: 987654,
  //     user: "User Name",
  //   },
  // ];
  const { response, loading, error } = useAxios({

    method: 'get',
    url: '/announcements'
  });

  const [buttonPopup, setButtonPopup] = useState(false);

  function clickNew() {
    setButtonPopup(true);
  };

  return (
    <section>
      <Navbar />
      <div className={classes.layout}>
      <h1 className={classes.h1}>Announcements</h1>

      <div className={classes.actions}>
        <button onClick={clickNew}>New</button>
      </div>

      <hr className={classes.hr}></hr>

      {/*loading & error handling for API response */}         
      {loading ? ( <p>loading...</p>) : 
       (
        <div className={classes.list}>
            {error && (
                <div>
                    <p>{error.message}</p>
                </div>
            )}
            <div>                     
              <AnnouncementList announcements={response.sort((a,b) => moment(b.date).diff(a.date))} />
              {console.log(response)}
            </div>
        </div>
      )}
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <AddAnnouncement />
      </Popup>
    </section>
  );
};

export default Announcements;