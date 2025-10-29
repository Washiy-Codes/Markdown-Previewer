const Editor = ({value, handleChange}) => {
  return (
    <div id="editor" className="editor-container">
        <h2 className="editor-title">Editor</h2>
        <textarea id="editor" value={value} onChange={handleChange} cols="30" rows="20"></textarea>
    </div>
  )
}

export default Editor