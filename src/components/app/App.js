import {useState, useRef, useEffect, useMemo} from 'react';

import AddNoteForm from '../add-note-form/Add-note-form';
import NoteList from '../note-list/Note-list';
import SearchForm from '../search-form/Search-form';
import NoteTagList from '../note-list/Note-tag-list';

import './app.scss';

const App = () => {

    const [data, setData] = useState([]);    
    const [inputValue, setInputValue] = useState('');
    const [noteWithTag, setNoteWithTag] = useState([]);
    const [json, setJson] = useState('');

   const jsonDB = useMemo(() => ({
        data: data,
        note: noteWithTag
    }), [data, noteWithTag]);

    useEffect(() => {
        setJson(JSON.stringify(jsonDB));
    }, [jsonDB]);

    const inputRef = useRef(null);

    const onHandlerChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdded(inputValue);
        setInputValue('');
    };

    const edit = (id, item) => {
        inputRef.current?.focus();
        const newArr = data.filter(item => item.id !== id);
        setInputValue(item.label);
        setData(newArr);
    };

    const onDelete = (id) => {
       const newData = data.filter(item => item.id !== id);
       setData(newData);
    };

    const onDeleteTag = (id, item) => {
        inputRef.current?.focus();
        const newTagData = noteWithTag.filter(el => el.id !== id);
        const newItemLabel = item.label.slice(1);
        setInputValue(newItemLabel);
        setNoteWithTag(newTagData);
    };

    const onItemAdded = (label) => {

        if(label < 1) {
            return;
        };

        let value = label.split(/(#[a-z\d-]+)/ig);

        for (let i = 0; i < value.length; i++) {

            const item = {
                label: value[i],
                id: Math.floor(Math.random() * 100 + 3)
            };    

            if(value[i].charAt(0) === "#") {
                setNoteWithTag([...noteWithTag, item]);
            } else if(value[i] !== '') {
                setData([item, ...data])
            }         
        };        
    };

    const searchTag = (items, term) => {

        if(term.length === 0) {
            return items;
        }

        const newArr = items.filter(item => item.label.indexOf(term) !== -1);
        
        setData(newArr);
    };


    return(
        <div className="container">
          <h1 className="title text-center">Notes with tag</h1>
            <AddNoteForm
            inputRef={inputRef}
            items={data}
            onHandlerChange={onHandlerChange}
            searchTag={searchTag}
            onSubmit={onSubmit}
            value={inputValue}/>

            <SearchForm
                searchTag={searchTag}
                items={data}/>
  
            <NoteList
                items={data}
                edit={edit}
                onDelete={onDelete}/>
         
            <NoteTagList
            items={noteWithTag}
            onDeleteTag={onDeleteTag} 
            />     
        </div>
    );
};

export default App;
