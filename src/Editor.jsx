const Editor = ({value, handleChange}) => {
  return (
    <div className="editor-container">
        <h2 className="editor-title">Editor</h2>
        <textarea className="editor" value={value} onChange={handleChange}></textarea>
    </div>
  )
}

export default Editor