export default function Button({ onClick, text, type = "add", classes = "" }) {
    let btnClasses = "btn btn-sm me-2 " + classes;
    let iconClasses = "bi bi-";

    switch (type) {
        case "add":
            btnClasses += " btn-outline-success";
            iconClasses += "plus-lg";
            break;
        case "delete":
            btnClasses += " btn-outline-danger";
            iconClasses += "x-lg";
            break;
    }

    return (
        <button type="button" className={btnClasses} onClick={onClick}>
            <i className={iconClasses}></i> {text}
        </button>
    );
}
