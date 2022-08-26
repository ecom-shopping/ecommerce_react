import React from "react";
import "./newsletter.css";
import SendIcon from "@mui/icons-material/Send";
const NewsLetter = () => {
  return (
    <section className="newsletter-container">
      <h1 className="news_title">News Letter</h1>
      <p className="news_desc">Get timely updatesfrom your favorite products</p>
      <div className="news_input">
        <input type="text" placeholder="Your email address" />
        <button>
          <SendIcon />
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
