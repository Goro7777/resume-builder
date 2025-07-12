export default function Header({ onDownload }) {
    return (
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid px-5">
                <a class="navbar-brand">Resume Builder</a>
                <button
                    class="btn btn-warning"
                    type="submit"
                    onClick={onDownload}
                >
                    Download PDF
                </button>
            </div>
        </nav>
    );
}
