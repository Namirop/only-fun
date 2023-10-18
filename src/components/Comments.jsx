function Comments(props) {
    return (
        <div className="comments-section-bubble-container">
            <h2>COMMENTAIRES</h2>
            <div className="add-comment-container">
                <input type="text" placeholder="Commentez.."/>
                <button>Poster</button>
            </div>
            <div className="comments-section-container">
                <div className="comment-container">
                    <p>{props.author}</p>
                    <p>{props.content}</p>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Comments;