import classes from "./CustomerData.module.css"

function TextBox(tbProp){
    const activeClasses = ["form-control"];
    if (tbProp.isMandatory) activeClasses.push(classes.mandatory);

    return(
        <>
            <label className="form-label" htmlFor={tbProp.id}>{tbProp.title}:</label>
            <input className={activeClasses.join(" ")}
                   id={tbProp.id}
                   name={tbProp.id}
                   type="text"
                    onChange={tbProp.changeHandler}
            />
        </>
    );
}

export default TextBox;