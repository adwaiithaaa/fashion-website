import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from './Heading';
import Button from './Button';
import Section from './Section';
import { samplePosts } from "../constants";
import React from "react";

const Competition = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const [currentLike, setCurrentLike] = useState(null); // Track single like
  const navigate = useNavigate();

  const sortedPosts = [...samplePosts].sort((a, b) => {
    if (sortBy === 'popularity') return b.likes - a.likes;
    if (sortBy === 'latest') return b.id - a.id;
    return 0;
  });

  const handleLike = (postId) => {
    if (currentLike === postId) {
      // Clicking the already-liked post removes the like
      setCurrentLike(null);
    } else {
      // Set new like (automatically removes any previous like)
      setCurrentLike(postId);
    }
  };

  return(
    <Section className="pt-[72px] md:pt-[80px]">
      <div className="container">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between item-start md:items-center mb-10">
          <Heading 
            title="Dress To Impress" 
            text="Showcase your best fashion moments" 
            className="!text-left !mb-0"
          />
          
          {/* Sort Controls */}
          <div className="flex items-center gap-4">
            <span className="body-2 text-n-4">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-n-7 text-n-1 px-4 py-2 rounded-lg border-n-6 focus:border-color-1 outline-none transition-colors"
            >
              <option value="popularity">Popularity</option>
              <option value="latest">Latest</option>
            </select>
            
            <Button onClick={() => navigate('/add-post')}>
              Add new photo
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-n-6 mb-10">
          <button className="px-4 py-3 text-n-4 body-1 hover:text-n-1 transition-colors">
            Your posts
          </button>
          <button className="px-4 py-3 text-n-4 body-1 hover:text-n-1 transition-colors">
            Collections
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sortedPosts.map((post) => {
            const isLiked = currentLike === post.id;
            const totalLikes = post.likes + (isLiked ? 1 : 0);
            
            return (
              <div key={post.id} className="relative group">
                {/* Portrait-style image container */}
                <div className="aspect-[3/4] w-full overflow-hidden rounded-xl relative">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder.jpg';
                    }}
                  />
                  
                  {/* Like button - bottom right */}
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`absolute bottom-3 right-3 z-10 p-2 rounded-full transition-all ${
                      isLiked 
                        ? 'bg-red-500/90 animate-pulse-once' 
                        : 'bg-n-8/80 hover:bg-n-7/90'
                    }`}
                    aria-label={isLiked ? "Remove like" : "Like this post"}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill={isLiked ? "#ffffff" : "none"} 
                      stroke="#ffffff" 
                      strokeWidth="2"
                      className="w-6 h-6"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-n-8/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="h6 text-n-1">{post.title}</h3>
                  <p className="body-2 text-n-3 mt-1">{post.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="body-1 text-n-1">
                      {totalLikes} ♥
                    </span>
                    {post.isTrending && (
                      <span className="tagline !text-xs !bg-color-2/20 !text-color-2 px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Button 
              key={num}
              className={`w-10 h-10 rounded-full !p-0 ${
                num === 1 
                  ? '!bg-color-1 !text-n-8' 
                  : '!bg-n-7 !text-n-4 hover:!bg-n-6'
              }`}
            >
              {num}
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Competition;