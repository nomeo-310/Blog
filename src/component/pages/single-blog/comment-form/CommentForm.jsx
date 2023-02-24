import React from 'react'
import './comment-form.scss'

const CommentForm = () => {
  return (
    <div className="comment-form">
        <h2>Leave a Reply</h2>
        <div className="form">
            <form className="form">
                <div className="input">
                    <input type="text" placeholder="enter name"/>
                    <input type="email" placeholder="enter email"/>
                </div>
                <div className="subject">
                    <input type="text" placeholder="subject"/>
                </div>
                <div className="text-area">
                    <textarea name="" id="" cols="30" rows="10" placeholder="enter message"></textarea>
                </div>
                <div className="submit-button">
                    <button type="submit">send message</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CommentForm;
