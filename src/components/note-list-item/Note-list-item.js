import './note-list-item.scss'

const NoteListItem = ({label, onDelete, onItemActive, edit}) => {

    return(
        <div className="note-list__card">
            <li 
                onClick={onItemActive}
                className="note-list__item"> 
                {label}
            </li>
            <div className="note-list__btns">
                <button
                    onClick={edit}
                    className="btn-plus">
                    <i className="fas fa-plus"></i>
                </button>
                <button 
                    onClick={onDelete}
                    className="btn-trash">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
};

export default NoteListItem;