import styles from "./Task.module.css"

function Task({
    title,
    dueDate,
    completed,
    important,
    onCheckCompleted,
    onCheckImportant,
    onCheckDelete
}) {
    return (
        <div className={`${styles.task} 
        ${completed ? styles.completed : ""}
        ${important ? styles.important : ""}`}
            onClick={onCheckCompleted}>

            <div class={styles.actions}>
                <button className={styles.importantButton} onClick={(e) => {
                    e.stopPropagation();
                    onCheckImportant();
                }}>⭐</button>

                <button className={styles.deleteButton} onClick={(e) => {
                    e.stopPropagation();
                    onCheckDelete();
                }}>❌</button>
            </div>
            
            <div>
                <p>{title}</p>
                <p className={styles.date}>Para: {dueDate}</p>
            </div>
        </div>
    )
}

export default Task;