import styles from "./MainLayout.module.css"

const MainLayout = ({children}) => {
   
    return(
       <div className={styles.content}>
          {children}
       </div>
    );
}

export default MainLayout;