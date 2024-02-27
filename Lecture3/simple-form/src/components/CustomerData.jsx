import TextBox from "./TextBox";
import Button from "./Button";
import "./CustomerData.css"
import {useState} from "react";


function CustomerData() {
    const currentDate = new Date().toDateString();

    const [canSubmit, setCanSubmit] = useState(false);
    const [nameValue, setNameValue] = useState("");
    const [addressValue, setAddressValue] = useState("");

    function nameFieldChangeHandler(e) {
        const name = e.target.value;
        setCanSubmit(name != null && name.length > 0);
        setNameValue(name);
    }

    function addressFieldChangeHandler(e) {
        const address = e.target.value;
        setAddressValue(address);
    }

    function submitRoutines(e) {
        e.preventDefault();
        console.log("nameValue=" + nameValue);
        console.log("addressValue=" + addressValue);
        //const fd = new FormData(e.target);
        //const nameFd = fd.get("name");
        //const addressFd = fd.get("address");
        const isValid = nameValue != null && nameValue.length > 0;
        if (!isValid) return;
        //sent to server
        fetch("http://localhost:3001/customer",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name: nameValue, address: addressValue})
            }
        ).then((res) => res.json()).then((parsedJson) => {console.log(parsedJson)})

        ;

    }

    return (
        <form onSubmit={submitRoutines}>
            <fieldset>
                <div className="form-group row row-margin">
                    <small>Page rendered:{currentDate}</small>
                </div>
                <div className="form-group row row-margin">
                    <TextBox id="name" title="Name" isMandatory={true} changeHandler={nameFieldChangeHandler}/>
                </div>
                <div className="form-group row row-margin">
                    <TextBox id="address" title="Address" changeHandler={addressFieldChangeHandler}/>
                </div>
                <div className="form-group row row-margin">
                    <Button id="submitButton" caption="Save" isDisabled={!canSubmit}/>
                </div>

            </fieldset>
        </form>
    );
}

export default CustomerData;