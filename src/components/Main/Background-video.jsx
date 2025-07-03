import video  from "../../assets/media/video.mp4";

const BackgroundVideo = () => {
    return (
        <>
            <video className="absolute top-0 w-full h-screen object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={video} type="video/mp4" />
            </video>
        </>
    );
};
export default BackgroundVideo;