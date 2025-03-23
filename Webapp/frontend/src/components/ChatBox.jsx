import { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const getRandomColor = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FFD700",
    "#FF69B4",
    "#00FA9A",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userColors, setUserColors] = useState({});
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (input.trim()) {
      const user = `User${Math.floor(Math.random() * 1000)}`;
      if (!userColors[user]) {
        setUserColors((prev) => ({
          ...prev,
          [user]: getRandomColor(),
        }));
      }
      const newMessage = { id: Date.now(), text: input, user };
      setMessages((prev) => [...prev, newMessage]);
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto mt-10 bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
      {/* 🔥 Header */}
      <div className="bg-gray-800 p-4 text-white text-center font-bold uppercase">
        Radio Assam Chat Room
      </div>

      {/* 💬 Messages */}
      <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            👋 Start the conversation! Send your first message.
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="flex items-start space-x-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: userColors[msg.user] || getRandomColor(),
                }}
              >
                <FiUser className="text-white" />
              </div>

              <div className="bg-gray-800 rounded-lg p-3 w-fit max-w-[75%] text-white">
                <p className="text-sm font-semibold">{msg.user}</p>
                <p className="text-base">{msg.text}</p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* ✏️ Input Bar */}
      <div className="bg-gray-800 p-4 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded-l-2xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="p-3 bg-cyan-500 text-white rounded-r-2xl hover:bg-cyan-600 transition-all"
        >
          <IoSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
