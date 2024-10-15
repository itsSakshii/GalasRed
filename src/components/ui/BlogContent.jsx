import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const BlogContent = ({ imageSrc, altText, heading, content, reverse = false }) => {
  return (
    <article
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center items-center gap-10 my-8 w-full`}
    >
     
      <div className="event-img w-full md:w-1/3 h-80 shadow-custom">
        <img
          src={imageSrc}
          className="   w-full h-full object-cover  rounded-lg boxShadow"
          alt={altText}
        />
      </div>


      <div className="event-content w-full md:w-1/2">
        <div className="content-inner flex flex-col  gap-2 justify-center items-center md:items-start md:justify-start h-full">
          <h4 className="event-heading font-semibold text-xl leading-loose">{heading}</h4>
          <div className="line-space"></div>
          <p className="   hyphens-auto italic font-extralight text-sm leading-loose">{content}</p>
          <div className="line-space"></div>
         
          <div className="self-center md:self-start">
            <Button text="Read More" className=" lg:inline-block w-auto px-4 py-2 "/>
          </div>
        </div>
      </div>
    </article>
  );
};

BlogContent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  heading: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default BlogContent;
