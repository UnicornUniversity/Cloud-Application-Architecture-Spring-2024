export default function MarkInfo({title, value, mode}){
    const modeInt = parseInt(mode);
    let color = "";
    switch (modeInt){
        case 0: color = "bg-danger"; break;
        case 1: color = "bg-warning"; break;
        case 2: color = "bg-success"; break;
        default: color = "bg-secondary"; break;
    }
    const activeClasses = ["badge"];
    activeClasses.push(color);

    return (<span style={{margin: "2px"}} className={activeClasses.join(" ")}>{title} {value}%</span>);
}