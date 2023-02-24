import com from '../../../images/blog/comment+post/com-1.jpg';
import res from '../../../images/blog/comment+post/res-1.jpg';
import './chat-section.scss';

const ChatSection =({comment_author, comment_date, response})=> {
    const Response =({response_author, response_date})=> {
        return(
            <div className="chat-box response">
                <div className="author-image">
                    <img src={res} alt="author_image"/>
                </div>
                <div className="comment-detail">
                    <div className="comment-time-line">
                        <h3>{response_author}</h3>
                        <h3>{response_date}</h3>
                        <h3>reply</h3>
                    </div>
                    <div className="comment-comment">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Est laborum suscipit animi perferendis nulla, inventore 
                            velit dolor quis recusandae? Dolor?
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <div className="chat-section">
            <div className="chat-box comment">
                <div className="author-image">
                    <img src={com} alt="author_image"/>
                </div>
                <div className="comment-detail">
                    <div className="comment-time-line">
                        <h3>{comment_author}</h3>
                        <h3>{comment_date}</h3>
                        <h3>reply</h3>
                    </div>
                    <div className="comment-comment">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Est laborum suscipit animi perferendis nulla, inventore 
                            velit dolor quis recusandae? Dolor?
                        </p>
                    </div>
                </div>
            </div>
            {response.map((responseInfo, index) => (<Response key={index} {...responseInfo}/>))}
        </div>
    );
}

export default ChatSection;