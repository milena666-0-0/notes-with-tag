import NoteTagListItem from "../note-list-item/Note-tag-item";

const NoteTagList = ({items, onDeleteTag}) => {

    const elements = items.map(item => {

        const {label, id} = item;

        return(
            <NoteTagListItem
            key={id}
            onDeleteTag={() => onDeleteTag(id, item)}
            label={label}/>
        )
    })

    return(
        <ul className="note-list">
            {elements}
        </ul>
    );
};

export default NoteTagList;
