import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Resume from "./components/Resume";
import Header from "./components/Header";
import "./App.css";

function App() {
    const [isEditing, setIsEditing] = useState(false);
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <>
            <Header
                onDownload={reactToPrintFn}
                onToggleEdit={() => setIsEditing(!isEditing)}
                isEditing={isEditing}
            />
            <Resume contentRef={contentRef} isEditable={isEditing} />
        </>
    );
}

export default App;
