function Button({id, caption, clickHandler, isDisabled}) {
    return (
        <button type="submit"
                id={id}
                onClick={clickHandler}
                disabled={isDisabled}
                className="btn btn-primary">
            {caption}
        </button>

    );
}

export default Button;