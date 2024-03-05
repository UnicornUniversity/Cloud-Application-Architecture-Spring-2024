export default function Card({text, mode}){
    // mode === 0 -> success; mode === 1 -> error;
    const activeClasses = [parseInt(mode) === 0 ? "bg-success" : "bg-danger", ...["card text-white bg-success mb-3"]];

    return (
        <div className={activeClasses.join(" ")} style={{maxWidth: '100%'}}>
            <div className="card-body">
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
}