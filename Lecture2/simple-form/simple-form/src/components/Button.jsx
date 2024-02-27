function Button({id, caption, clickHandler}){
    return(
        <button type="button" id={id} onClick={clickHandler}>{caption}</button>

    );
}

export default Button;