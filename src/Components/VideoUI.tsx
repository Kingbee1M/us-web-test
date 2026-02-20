
interface VideoPlayerProps {
  src: string;
  width?: string | number;
}


const VideoPlayer = ({ src, width }: VideoPlayerProps) => {

  // Convert YouTube link into embed format
  // const getYouTubeEmbed = (link: string) => {
  //   let videoId = "";

  //   if (link.includes("youtu.be/")) {
  //     videoId = link.split("youtu.be/")[1].split("?")[0];
  //   } else if (link.includes("watch?v=")) {
  //     videoId = link.split("watch?v=")[1].split("&")[0];
  //   }

  //   return `https://www.youtube.com/embed/${videoId}`;
  // };

  const getGoogleDriveEmbed = (link: string) => {
  let fileId = "";

  if (link.includes("/file/d/")) {
    fileId = link.split("/file/d/")[1].split("/")[0];
  } else if (link.includes("open?id=")) {

    
    fileId = link.split("open?id=")[1].split("&")[0];
  }

  if (!fileId) {
    console.warn("Invalid Google Drive link provided:", link);
    return "";
  }

  return `https://drive.google.com/file/d/${fileId}/preview`;
};


  

  return (
    <div
     className={` w-full max-w-none rounded-xl overflow-hidden shadow-lg relative`} style={{ width: width }}>
      {/* Video */}
        <iframe
          src={getGoogleDriveEmbed(src)}
          title="YouTube Video"
          className="w-full aspect-video"
          allowFullScreen
        />
      </div>
  )
};

export default VideoPlayer;
