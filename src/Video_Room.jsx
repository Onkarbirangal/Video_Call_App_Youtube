import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
const Video_Room = () => {
  const { id } = useParams();
  const meeting = (element) => {
    // generate Kit Token
    const appID = 538279684;
    const serverSecret = "ed6ef11821e9588ce60a3ddbf7c38a37";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "onkar"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url: `http://locallhost:5173/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  return (
    <div style={styles.wrapper}>
      <div style={styles.topBar}>
        <h2 style={styles.roomText}>Room ID: {id}</h2>
      </div>

      <div ref={meeting} style={styles.videoContainer}></div>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        `}
      </style>
    </div>
  );
};

export default Video_Room;

const styles = {
  wrapper: {
    height: "100vh",
    width: "100vw",
    background: "#020617",
    display: "flex",
    flexDirection: "column",
    animation: "fadeIn 1s ease",
  },

  topBar: {
    height: "60px",
    background: "#020617",
    color: "#38bdf8",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    borderBottom: "1px solid #1e293b",
    fontSize: "18px",
    fontWeight: "bold",
  },

  roomText: {
    color: "#38bdf8",
  },

  videoContainer: {
    flex: 1,
  },
};
