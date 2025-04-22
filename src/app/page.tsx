import ClassPost from "@/Components/ClassPost";
import postsData from "@/example_data/ClassPosts.json";

export default function Home() {
  return <div className="pt-6 pl-6 pr-6 flex flex-col no-scrollbar">
  {postsData.map((post) => (
    <ClassPost key={post.postId} post={post} />
  ))}
</div>
}
