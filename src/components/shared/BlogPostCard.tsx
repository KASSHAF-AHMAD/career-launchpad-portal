
import { BlogPost } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { format, parseISO } from "date-fns";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  // Format the publish date
  const formattedDate = format(parseISO(post.publishDate), "MMM d, yyyy");

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="mr-4">{formattedDate}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{post.readTime} min read</span>
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-brand-blue transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <span 
          className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-3"
        >
          {post.category}
        </span>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex items-center">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <span className="text-gray-700 font-medium">{post.author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
