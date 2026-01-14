import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ZegoClound = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const joinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Join a Video Room</h1>
      <input
        type="text"
        name=""
        placeholder="Enter Room Id"
        id=""
        onClick={(e) => setValue(e.target.value)}
        style={styles.input}
      />
      <button
        onClick={joinRoom}
        style={styles.button}
        onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
      >
        JOIN
      </button>
      <p style={styles.hint}>Ask your friend for the Room ID</p>
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes glow {
          0% { box-shadow: 0 0 10px #38bdf8; }
          50% { box-shadow: 0 0 30px #38bdf8; }
          100% { box-shadow: 0 0 10px #38bdf8; }
        }
        `}
      </style>
    </div>
  );
};

export default ZegoClound;
const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeIn 1.5s ease",
  },

  title: {
    color: "#fff",
    fontSize: "3rem",
    marginBottom: "25px",
    animation: "slideUp 1s ease",
  },

  input: {
    width: "320px",
    padding: "15px 22px",
    borderRadius: "50px",
    border: "none",
    outline: "none",
    fontSize: "16px",
    marginBottom: "20px",
    textAlign: "center",
    background: "#020617",
    color: "#fff",
    boxShadow: "0 0 15px rgba(56,189,248,0.5)",
    animation: "slideUp 1.2s ease",
    transition: "0.4s",
  },

  button: {
    padding: "14px 50px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "50px",
    color: "#020617",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    animation: "glow 2s infinite",
    transition: "0.3s",
  },

  hint: {
    color: "#94a3b8",
    marginTop: "15px",
    fontSize: "14px",
    animation: "fadeIn 2s ease",
  },
};