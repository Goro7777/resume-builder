export default function Header({ onDownload, isEditing, onToggleEdit }) {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid px-5">
                <a className="navbar-brand">Resume Builder</a>

                <button className="btn btn-info outline" onClick={onToggleEdit}>
                    {isEditing ? (
                        <i className="bi bi-check2-square"> Save</i>
                    ) : (
                        <i className="bi bi-pencil-square"> Edit</i>
                    )}
                </button>

                <button
                    className="btn btn-warning"
                    onClick={onDownload}
                    disabled={isEditing}
                >
                    <i className="bi bi-printer"></i> Print
                </button>
            </div>
        </nav>
    );
}
