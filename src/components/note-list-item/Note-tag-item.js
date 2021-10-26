import './note-list-item.scss'

const NoteTagListItem = ({label, onDeleteTag}) => {

    return(
        <div className="note-list__card note-tag-list__card">
            <li 
                className="note-list__item">
                  {label}
            </li>
            <div className="note-list__btns">
                <button 
                onClick={onDeleteTag}
                className="btn-trash"
                type="">
                    <i className="fas fa-trash"></i>
                </button>
            </div>      
        </div>
    )
};

export default NoteTagListItem;