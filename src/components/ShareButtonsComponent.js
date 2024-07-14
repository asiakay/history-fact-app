import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon
} from 'react-share';

const ShareButtonsComponent = ({ title, url, siteUrl }) => {
      // Construct the full URL
    const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
      // Content to be shared
    const shareContent = `${title} \nRead more at: ${fullUrl}`;
    
   

    /* const shareUrl = 'https://history-fact-app.vercel.app';
  const title = 'Explore and learn interesting facts about history.'; */

  return (
    <div>
    <FacebookShareButton url={fullUrl} quote={title}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <TwitterShareButton url={fullUrl} title={title}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <LinkedinShareButton url={fullUrl} title={title}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
    <RedditShareButton url={fullUrl} title={title}>
      <RedditIcon size={32} round />
    </RedditShareButton>
    <EmailShareButton url={fullUrl} subject={title} body={`Check out this fact on ${shareContent}`}>
      <EmailIcon size={32} round />
    </EmailShareButton>
  </div>
  );
}

export default ShareButtonsComponent;
