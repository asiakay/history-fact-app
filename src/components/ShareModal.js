import React, { useState } from 'react';

const ShareModal = ({ quote }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShareClick = () => {
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(quote.description);
    alert('Quote copied to clipboard!');
  };

  const handleTweetClick = () => {
    const tweet = `"${quote.description}" - ${quote.person}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="share">
      <button className="share-button" onClick={handleShareClick}>Share</button>
      {showModal && (
        <div className="share-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Share Quote</h2>
              <button className="close-button" onClick={handleCloseClick}>X</button>
            </div>
            <div className="modal-body">
              <p>{quote.description}</p>
            </div>
            <div className="modal-footer">
              <button className="copy-button" onClick={handleCopyClick}>Copy to Clipboard</button>
              <button className="tweet-button" onClick={handleTweetClick}>Tweet This</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareModal;
