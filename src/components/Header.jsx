export default function Header({ onDownload, isEditing, onToggleEdit }) {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid px-5">
                <a className="navbar-brand">Resume Builder</a>

                <button className="btn btn-info outline" onClick={onToggleEdit}>
                    {isEditing ? (
                        <i className="bi bi-save"> Save</i>
                    ) : (
                        <i className="bi bi-pen"> Edit</i>
                    )}
                </button>

                <button
                    className="btn btn-warning"
                    onClick={onDownload}
                    disabled={isEditing}
                >
                    <i className="bi bi-download"></i> Download PDF
                </button>
            </div>
        </nav>
    );
}
