import { useEffect, useState } from "react";

export default function VideoModel() {
  const [showVideo, setShowVideo] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);
  const [videoWidth, setVideoWidth] = useState(1280); // Default width

  useEffect(() => {
    if (!hasBeenClosed) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [hasBeenClosed]);

  // Handle window resize to update video width
  useEffect(() => {
    const updateWidth = () => {
      const containerWidth = Math.min(1280, window.innerWidth - 32);
      setVideoWidth(containerWidth);
    };

    updateWidth(); // Initial call
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleClose = () => {
    setShowVideo(false);
    setHasBeenClosed(true);
  };

  if (!showVideo) return null;

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className="relative bg-white/95 rounded-lg p-4 mx-auto"
        style={{
          width: videoWidth,
          maxWidth: "100%",
        }}
      >
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors"
          aria-label="Close video"
        >
          ✕
        </button>
        <div className="w-full" style={{ aspectRatio: "16/9" }}>
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dxe8hawc2&public_id=placement_ygsikp&profile=cld-default"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="rounded-lg shadow-lg"
            // 🔴 Removed the onLoad function to avoid cross-origin issues
          ></iframe>
        </div>
      </div>
    </div>
  );
}
