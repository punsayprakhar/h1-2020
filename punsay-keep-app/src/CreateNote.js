import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNode = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const [isMaximize, setIsMaximize] = useState(false);

    const onChangeHandler = (event) => {

        const { name, value } = event.target;

        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    const isNoteEmpty = (note) => {
        for (var prop in note) {
            if (note[prop] !== "")
                return false;
        }
        return true;
    }

    const addOnChangeHandler = () => {

        if (!isNoteEmpty(note)) {
            props.passNote(note);
            setNote({
                title: "",
                content: "",
            });
        }
    }

    const onClickMaximizeHandler = () => {
        setIsMaximize(true);
    }

    const onDoubleClickMinimizeHandler = () => {
        setIsMaximize(false);
    }


    return (
        <>
            <div className="main_note" onDoubleClick={onDoubleClickMinimizeHandler}>
                <form>
                {isMaximize?(
                    <input type="text"
                    placeholder="Title"
                    autoComplete='off'
                    name='title'
                    value={note.title}
                    onChange={onChangeHandler} />
                ) : null}

                    <textarea rows=""
                    column="" 
                    placeholder="Write a note..."
                        name="content"
                        value={note.content}
                        onChange={onChangeHandler}
                        onClick={onClickMaximizeHandler}
                    ></textarea>

                    {isMaximize?(
                    <Button>
                        <AddIcon className="plus_sign" onClick={addOnChangeHandler} />
                    </Button>) :null}
                </form>
            </div>
        </>
    );
}

export default CreateNode;
