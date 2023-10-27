import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Post as IPost } from "./main";
import { auth, database } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {
  post: IPost;
}

export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);
  

  const likesRef = collection(database, "likes");

  const likesDoc = query(likesRef, where("postId", "==", post.id) )

  const getLikes = async () => {
    const data = await getDocs(likesDoc)
  }

  const addLike = async () => {
    await addDoc(likesRef, { userId: user?.uid, postId: post.id });
  };
  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p>- {post.username}</p>
        <button onClick={addLike}>&#128077;</button>
        <p>Likes: {} </p>
      </div>
    </div>
  );
};
