import React, { useState } from 'react';

const ReviewPage = () => {
  const [reviewText, setReviewText] = useState('');
  const [reviewData, setReviewData] = useState('');

  const handleReviewSubmit = () => {
    console.log(`Review submitted: ${reviewText}`);
    setReviewData(reviewText);
  };

  return (
    <div>
      <h2>Review Page</h2>
      <textarea
        placeholder="Write your review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      ></textarea>
      <button onClick={handleReviewSubmit}>Submit Review</button>
      <h2>Reviews:</h2>
      <p>{reviewData}</p>
    </div>
  );
};

export default ReviewPage;
