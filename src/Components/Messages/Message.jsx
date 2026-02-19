import './Message.css';

const Message = ({ avatar, name, text, time, unread }) => {
  return (
    <div className={`message ${unread ? 'unread' : ''}`}>
      <img
        src={avatar}
        alt={name}
        className="message-avatar"
      />

      <div className="message-content">
        <div className="message-header">
          <span className="message-name">{name}</span>
          <span className="message-time">{time}</span>
        </div>

        <p className="message-text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
