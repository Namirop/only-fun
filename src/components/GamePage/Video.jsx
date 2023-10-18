function Video(props) {
    const videoId = props.video;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MmB9b5njVbA?si=fqXUH0Ndo1MyJsz-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
}


export default Video;