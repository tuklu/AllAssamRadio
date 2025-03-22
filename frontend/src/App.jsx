import ChatBox from "./components/ChatBox";
import RadioPlayer from "./components/RadioPlayer";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white flex flex-col overflow-hidden">
      {/* 🚩 Header */}
      <header className="w-full mt-6 ">
        <h1 className="text-3xl ml-7 font-bold uppercase font-mono ">
          Radio.Assam
        </h1>
      </header>

      {/* 🎵 Main Layout */}
      <div className="flex-1 flex justify-center items-center relative">
        {/* 🎧 Radio Player */}
        <div className="w-[75%] max-w-4xl">
          <RadioPlayer />
        </div>

        {/* 💬 Floating Chatbox */}
        <div className="absolute right-8 w-96 h-[80vh] z-10">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default App;
