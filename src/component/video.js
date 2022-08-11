import "./video.css";
import video from "../img/overview/video-banner.mp4"

export default function Video() {
    return (
        <div className="vibanner">
            <video loop muted autoPlay>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}
