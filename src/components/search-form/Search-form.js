import {useState} from 'react';

import './search-form.scss';

const SearchForm = ({items, searchTag}) => {

    const [tag, setTag] = useState('');

    const onUpdateSearch = (e) => {
        setTag(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        searchTag(items, tag);
        setTag('');
    };

    return(
        
        <form 
            onSubmit={onSubmit}
            className="search-form">
            <input
                value={tag}
                onChange={onUpdateSearch}
                className="search-form__input"
                placeholder="Search note by tag"/>
            <button 
                className="search-form__btn">
                Search
            </button>
        </form>
        
    )
};

export default SearchForm;