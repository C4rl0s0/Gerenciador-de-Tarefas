import styles from "./Task.module.css"

const stage = ["To do", "In Progress", "Done"];

function Task(props) {
    return (
        <div className={styles.task}>{props.title}</div>
    )
}

export default Task;