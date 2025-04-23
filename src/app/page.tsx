import ClassPost from "@/Components/ClassPost";
import postsData from "@/example_data/ClassPosts.json";
import clubPostsData from "@/example_data/ClubPosts.json";
import ClubPost from "@/Components/Clubpost";

export default function Home() {
  return <div className="pt-6 pl-6 pr-6 flex flex-col no-scrollbar">
    {clubPostsData.map((post) => (
    <ClubPost key={post.postId} post={post} />
  ))}
  {postsData.map((post) => (
    <ClassPost key={post.postId} post={post} />
  ))}
</div>
}
