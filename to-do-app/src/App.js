import React, { useState } from 'react';

import ToDoLists from './ToDoLists'

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import './App.css';
import './font.css';


const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemChangeEventHandler = (event) => {
    setInputList(event.target.value);
  }

  const addItemHandler = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });

    setInputList("");
  }

  const deleteItemHandler = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className='main_div'>
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text'
            placeholder='Add Items'
            onChange={itemChangeEventHandler}
            value={inputList} />
            <Tooltip title="Add" aria-label="add">
              <Button className="button-green" onClick={addItemHandler}> <AddIcon/> </Button>
            </Tooltip>

          <ol>
            {/*<li>{inputList}</li>*/}

            {items.map((itemVal, index) => {
              return <ToDoLists key={index} id={index} text={itemVal} onSelect={deleteItemHandler} />
            })}

          </ol>
        </div>
      </div>
    </>
  );
};

export default App;