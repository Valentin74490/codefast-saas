
import ButtonVote from "./ButtonVote";

const CardPost = ( { post }) => {
  return <li className="bg-base-100 rounded-3xl p-6 flex justify-between items-center mb-4">
    <div>
      <div className="font-bold mb-1">{post.title}</div>
      <div className="opacity-80 leading-relaxed max-h-32 overflow-scroll">{post.description}</div>
    </div>
    <ButtonVote postId={post._id.toString()} initialVoted={false}/>
      </li>


};

export default CardPost;
