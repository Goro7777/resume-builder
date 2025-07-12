export default function EditableTitle({ classes, isEditing, value, onChange }) {
    return (
        <p className={classes}>
            {isEditing ? (
                <input
                    className={"w-80 p-0 border-0 m-0 " + classes}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                value
            )}
        </p>
    );
}
