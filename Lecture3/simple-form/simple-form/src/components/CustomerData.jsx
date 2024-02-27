import TextBox from "./TextBox";
import Button from "./Button";


function CustomerData() {

    function hello() {
        alert("Hello!");
    }

    const currentDate = new Date().toDateString();

    return (
        <form>
            <fieldset>
                <div className="form-group row">
                    <small>Page rendered:{currentDate}</small>
                </div>
                <div className="form-group row">
                    <TextBox id="name" title="Name"/>
                </div>
                <div className="form-group row">
                    <TextBox id="address" title="Address"/>
                </div>
                <div className="form-group row">
                    <Button id="myButton" caption="Hello!" clickHandler={hello} isDisabled={false}/>
                </div>
            </fieldset>
        </form>
    );
}

export default CustomerData;