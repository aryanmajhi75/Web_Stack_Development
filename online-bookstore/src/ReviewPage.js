import React, { useState } from 'react';

const ReviewPage = () => {
  const [reviewText, setReviewText] = useState('');

  const handleReviewSubmit = () => {
    console.log(`Review submitted: ${reviewText}`);
    setReviewText('');
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
    </div>
  );
};

export default ReviewPage;
