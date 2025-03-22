import { useState, useRef, useEffect, useCallback } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { IoVolumeHigh, IoVolumeLow, IoVolumeMute } from "react-icons/io5";
import stations from "../services/urls";

const RadioPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const playerRef = useRef(null);

  const currentStation = stations[currentIndex];

  // 🚀 Play/Pause Handler
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // ⏭️ Next Station
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % stations.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(true);
  };

  // ⏮️ Previous Station
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + stations.length) % stations.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(true);
  };

  // ⌨️ Keyboard Shortcuts Handler
  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        handlePlayPause();
      } else if (e.code === "ArrowRight") {
        handleNext();
      } else if (e.code === "ArrowLeft") {
        handlePrevious();
      }
    },
    [currentIndex, isPlaying]
  );

  // 🎯 Attach/Remove Keyboard Listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // ⏯️ Reset player when changing stations
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white">
      {/* 🎵 Station Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
        {stations.map((station, index) => (
          <div
            key={station.id}
            className={`rounded-lg p-5 shadow-md transition-all transform cursor-pointer ${
              currentIndex === index ? "bg-gray-700" : "bg-gray-900"
            }`}
            onClick={() => {
              if (currentIndex === index) {
                setIsPlaying(!isPlaying);
              } else {
                setCurrentIndex(index);
                setIsPlaying(true);
              }
            }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{station.name}</h3>
                <p className="text-gray-400">{`Stream ${index + 1}`}</p>
              </div>

              <button className="w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer">
                {currentIndex === index && isPlaying ? (
                  <FaPause size={22} />
                ) : (
                  <FaPlay size={22} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🎛️ Floating Compact Controller */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white w-96 rounded-2xl shadow-lg flex items-center justify-between px-10 py-5 border border-gray-700">
        {/* ⏮️ Previous Button */}
        <button
          onClick={handlePrevious}
          className="text-cyan-400 cursor-pointer"
        >
          <FaBackward size={20} />
        </button>

        {/* ⏯️ Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="rounded-full w-14 h-14 flex items-center justify-center cursor-pointer"
        >
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>

        {/* ⏭️ Next Button */}
        <button onClick={handleNext} className="text-cyan-400 cursor-pointer">
          <FaForward size={20} />
        </button>

        {/* 🔊 Volume Control */}
        <div className="relative group">
          <div className="flex items-center gap-3">
            {volume === 0 ? (
              <IoVolumeMute size={20} />
            ) : volume > 0.5 ? (
              <IoVolumeHigh size={20} />
            ) : (
              <IoVolumeLow size={20} />
            )}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-28 accent-cyan-500 appearance-none bg-gray-700 rounded-full cursor-pointer transition-all"
            />
          </div>
        </div>
      </div>

      {/* 🎚️ React Player (Hidden) */}
      <ReactPlayer
        ref={playerRef}
        url={currentStation.url}
        playing={isPlaying}
        volume={volume}
        width="0"
        height="0"
      />
    </div>
  );
};

export default RadioPlayer;
