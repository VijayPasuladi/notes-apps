import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isNotesListVisible, setIsNotesListVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get('http://localhost:3000/notes');
      setNotes(res.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  const saveNote = async () => {
    try {
      await axios.post('http://localhost:3000/notes', { title, content });
      setTitle('');
      setContent('');
      fetchNotes(); // Refresh notes list
      hideNotesList();
      if (!title.trim() || !content.trim()) {
        setErrorMessage('Both title and content cannot be empty.'); // Set an error message
        return; // Stop the function execution to prevent form submission
      }
      // If validation passes, proceed with saving the note
      setErrorMessage(''); 
      
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);
      fetchNotes(); // Refresh notes list
    } catch (error) {
      console.error(error);
    }
  };

  const showNotesList = () => {
   
      setIsNotesListVisible(true);
   
  };

  const hideNotesList = () => {
    setIsNotesListVisible(false);
  };
  


  return ( 
    <div className="App">
      <h1 className='title'>Notes App</h1>
           <input type="text" className='inputs' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} className='inputs' onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
      <button onClick={saveNote} className='save-button'>Save Note</button>
            <button onClick={showNotesList} className='list-button1'>List Notes</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}     
{isNotesListVisible &&
      <ul className='ul '>
        {notes.map(note => (
          <li key={note.id} className='notes-list'>
            <div>
           <span className='title-input'>{note.title}</span> - <span className='notes-content'>{note.content}</span>
           </div>
          
           <button className='delet-button' onClick={() => deleteNote(note.id)}>Delete</button>
          
          </li>
          ))}
          
      </ul>
}
    </div>
  );
}

export default App;