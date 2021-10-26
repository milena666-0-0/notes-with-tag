import './add-note-form.scss'

const AddNoteForm = ({onHandlerChange, onSubmit, value, inputRef}) => {

    return(
        <>
        <form 
            onSubmit={onSubmit}
            className="add-form">
            <textarea
                ref={inputRef}
                value={value}
                name="text"
                onChange={onHandlerChange}
                className="add-form__input"
                placeholder="Add new note"/>

            <button 
                className="add-form__btn"
                type="submit">
                Add
            </button>
        </form>
        </>
    );
};

export default AddNoteForm;