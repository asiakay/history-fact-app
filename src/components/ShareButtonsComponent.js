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

const ShareButtonsComponent = () => {
  const shareUrl = 'https://history-fact-app.vercel.app';
  const title = 'Explore and learn interesting facts about history.';

  return (
    <div>
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton url={shareUrl} title={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <EmailShareButton url={shareUrl} subject={title} body="Check out this site!">
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
}

export default ShareButtonsComponent;
