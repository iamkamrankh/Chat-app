import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatApp = () => {
  // setChats is to display the values
  // and the chats is use to change the value
  const [chats, setChats] = useState([]);
  // to fetch our api we gonna install the library axios
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  //   useeffect is a hook in react which run when the component render for the first time
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatApp;
