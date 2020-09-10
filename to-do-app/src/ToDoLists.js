import React from "react";

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const ToDoLists = (props) => {

    return (
        <>
            <div className="todo_style">
                <Tooltip title="Delete">
                    <Button className='button-red'>
                        <DeleteIcon className="deleteIcon"
                            onClick={() => {
                                props.onSelect(props.id);
                            }}
                        />
                    </Button>
                </Tooltip>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoLists;