

export const Tweet = ({tweet, onLike}) => {
  return (
    <div className="card">
        <p>{tweet.text}</p>
        <button onClick={ () => onLike(tweet.id) }>{tweet.likes} ❤️</button>
    </div>
  )
}
