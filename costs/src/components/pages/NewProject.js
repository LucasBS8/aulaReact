import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
        <p>Crie um projeto para depois adicionar os serviços</p>
        <ProjectForm/>
        </div>
    )
}

export default NewProject;