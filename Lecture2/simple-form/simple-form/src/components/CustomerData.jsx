import TextBox from "./TextBox";

function CustomerData() {

    return (
        <>
            <form>
                <fieldset>
                    <legend>Customer Data</legend>
                    <TextBox id="name" title="Name"/>
                    <TextBox id="address" title="Address"/>
                </fieldset>
            </form>
        </>


    );
}

export default CustomerData;