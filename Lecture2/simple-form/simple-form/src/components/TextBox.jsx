function TextBox(tbProp){
    return(
        <>
            <label htmlFor={tbProp.id}>{tbProp.title}:</label>
            <input id={tbProp.id} type="text"/>
        </>
    );
}

export default TextBox;