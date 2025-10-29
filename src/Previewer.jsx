import ReactMarkdown from 'react-markdown';

const Previewer = ({ content }) => {
  return (
    <div className="previewer-container">
      <h2 className="preview-title">Previewer</h2>
      <div id="preview">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Previewer;