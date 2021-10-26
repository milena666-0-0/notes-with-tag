import NoteListItem from "../note-list-item/Note-list-item";

const NoteList = ({items, onDelete, edit}) => {

    const elements = items.map(item => {

        const {label, id} = item;

        return(
            <NoteListItem
            key={id}
            edit={() => edit(id, item)}
            onDelete={() => onDelete(id)}
            label={label}/>
        )
    })

    return(
        <ul className="note-list">
            {elements}
        </ul>
    );
};

export default NoteList;