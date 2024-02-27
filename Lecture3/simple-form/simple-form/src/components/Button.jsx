function Button({id, caption, clickHandler}){
    return(
        <button type="button"
                id={id}
                onClick={clickHandler}
                className="btn btn-primary"

        >
            {caption}
        </button>

    );
}

export default Button;