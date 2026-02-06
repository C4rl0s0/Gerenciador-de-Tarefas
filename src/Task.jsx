import styles from "./Task.module.css"

function Task({
    title,
    dueDate,
    completed,
    important,
    onCheckCompleted,
    onCheckImportant
}) {
    return (
        <div className={`${styles.task} 
        ${completed ? styles.completed : ""}
        ${important ? styles.important : ""}`}
            onClick={onCheckCompleted}>

            <button className={styles.importantButton} onClick={(e) => {
                e.stopPropagation();
                onCheckImportant();
            }}>⭐</button>
            
            <div>
                <p>{title}</p>
                <p className={styles.date}>Para: {dueDate}</p>
            </div>
        </div>
    )
}

export default Task;