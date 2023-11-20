import Header from "../components/Header";
import SideBar from "../components/SideBar";
import clsx from "clsx";
import styles from './AceLayout.module.scss'

function AceLayout({ children }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Header />
      <div className={clsx(styles.container)}>
        <SideBar />
        <div className={clsx(styles.content)}>{children}</div>
      </div>
    </div>
  );
}

export default AceLayout;
