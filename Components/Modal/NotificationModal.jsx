import React, { useEffect, useState } from "react";

import NotificationModalList from "../Reusable/NotificationModalList";

const NotificationModal = () => {
  const [notifications, setNotifications] = useState();
  useEffect(() => {
    const notify = JSON.parse(localStorage.getItem("NOTIFICATIONS"));
    setNotifications(notify?.reverse());
    console.log(notify);
  }, []);
  return (
    <div
      className="absolute flex flex-col py-1 mt-1 z-20 rounded-lg shadow-lg outline-none overflow-auto bg-default border border-muted right-0 max-w-full w-96"
      style={{ maxHeight: "max(24rem, 40vh)" }}
    >
      <div
        className="bg-default border border-muted rounded-lg mx-5 my-4 p-4 flex flex-col gap-4 relative z-10"
        data-theme="light"
      >
        <div className="flex flex-col gap-2 max-w-[276px]">
          <p className="sm:text-sm font-bold text-default text-sm">
            Turn on Web3 Notifications!
          </p>
          <p className="sm:text-sm font-normal text-default text-sm">
            Enable notifications to start receiving alerts on transfers, staking
            and much more.
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <a
              href="https://priyanshu-portfolio-beta.vercel.app/"
              target="_blank"
              className="cursor-pointer disabled:cursor-auto transition px-5 py-2 rounded-full border flex items-center justify-center text-center text-sm border-primary-default bg-primary-default text-primary-inverse hover:border-primary-default-hover hover:bg-primary-default-hover"
            >
              <span>Enable</span>
            </a>
          </div>
          <div>
            <div>
              <img
                src="https://portfolio.metamask.io/assets/track-8ac28279.png"
                alt="Notifications"
                className="absolute bottom-0 right-0 w-24 xs:w-28 -z-10"
              />
            </div>
          </div>
        </div>
      </div>
      {notifications?.map((item, index) => (
        <NotificationModalList
          title={item?.date}
          description={item?.message}
          date={item?.time}
        />
      ))}
    </div>
  );
};

export default NotificationModal;
