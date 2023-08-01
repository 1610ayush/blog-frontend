const CommentsList = ({comments}) => (
    <>
        <h3>Comments:</h3>
        {console.log(comments)}
        {comments.map(comment => (
            <div className="comment" key={comment.postedBy + ": " + comment.text}>
                {comment.postedBy.email ? <h4>{comment.postedBy.email}</h4> : <h4>{comment.postedBy}</h4>}
                <p>{comment.text}</p>
            </div>
        ))}
    </>
)

export default CommentsList;