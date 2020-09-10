import React, { useState } from 'react';

import Header from './Header';
import CreateNode from './CreateNote';
import Note from './Note';
import Footer from './Footer';
import './App.css';

const App = () => {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {

    setAddItem((oldItem) => {
      return [...oldItem, note]
    });

  }

  const removeItemHandler = (id) => {
    setAddItem((oldData) => {
      return(
        oldData.filter((item, index) => {
          return index !== id;
        })
      )
    })
  }

  return (
    <>
      <Header />
      <CreateNode passNote={addNote} />
      {addItem.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            removeItem={removeItemHandler} />
        )
      })}
      <Footer />
    </>
  )
}

export default App;
