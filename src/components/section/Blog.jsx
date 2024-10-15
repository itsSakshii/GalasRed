import React from 'react';
import BlogContent from '../ui/BlogContent';
import img1 from '../../assets/image/section-image/Blog-1.webp';
import img2 from '../../assets/image/section-image/Blog-2.webp';

export default function Blog() {
  const blogPosts = [
    {
      imageSrc: img1, 
      altText: "Event image showing business professionals",
      heading: (
        <>
          <span className="text-teal-400">Unforgettable Nights :</span>  Top 5 Music Festivals You Can't Miss in 2024
        </>
      ),
      content:
        "Are you ready to experience music like never before? Whether you're a die-hard fan of electronic beats, rock anthems, or pop hits, 2024 is packed with music festivals that will blow your mind. From stunning stage designs to unforgettable performances, these festivals are the ultimate celebration of live entertainment. 2024 promises to be a year packed with electrifying performances and unforgettable moments. Get your tickets early and prepare for the musical adventure of a lifetime!"
    },
    {
      imageSrc: img2, 
      altText: "Event image showing business professionals",
      heading: (
        <>
          <span className="text-teal-400">Lights, Camera, Action!</span> How to Throw the Ultimate Movie-Themed Party
        </>
      ),
      content:
        "Movie-themed parties are all the rage right now, and for a good reason—they are the perfect blend of creativity, fun, and nostalgia. Whether you're celebrating a birthday or just throwing a get-together, a well-executed movie-themed party can make you the star of the social scenes. With a little creativity and planning, your movie-themed party will be an event that people will be talking about for months."
    }
  ];

  return (
    <>
      <section className="event antialiased">
        <div className="event-inner container mx-auto px-4">
          <div className="heading">
            <h2 className="content-heading text-center">
              Our <span className="text-teal-200">Blogs</span>
            </h2>
          </div>
          <div className="section-space"></div>

          {blogPosts.map((post, index) => (
            <BlogContent
              key={index}
              imageSrc={post.imageSrc}
              altText={post.altText}
              heading={post.heading} 
              content={post.content}
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>
      </section>
      <div className="section-space"></div>
    </>
  );
}
