import { usePDF } from "react-to-pdf";
import Resume from "./components/Resume";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

    return (
        <>
            <Header onDownload={toPDF} />
            <Resume targetRef={targetRef} />
        </>
    );
}

export default App;
