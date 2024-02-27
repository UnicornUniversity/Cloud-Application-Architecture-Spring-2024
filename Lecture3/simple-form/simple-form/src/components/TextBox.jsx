function TextBox(tbProp){

    return(
        <>
            <label className="form-label" htmlFor={tbProp.id}>{tbProp.title}:</label>
            <input className="form-control" id={tbProp.id} type="text"/>
        </>
    );
}

export default TextBox;