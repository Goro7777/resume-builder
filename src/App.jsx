import { useState } from "react";
import { usePDF } from "react-to-pdf";
import Resume from "./components/Resume";
import Header from "./components/Header";
import "./App.css";

function App() {
    const [isEditing, setIsEditing] = useState(false);
    const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

    return (
        <>
            <Header
                onDownload={toPDF}
                onToggleEdit={() => setIsEditing(!isEditing)}
                isEditing={isEditing}
            />
            <Resume targetRef={targetRef} isEditing={isEditing} />
        </>
    );
}

export default App;
