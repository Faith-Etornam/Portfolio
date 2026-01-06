import { ReactNode } from 'react'
import styles from "./Layout.module.css"
import Navbar from '../Navbar';
import Footer from '../Footer';

interface Props {
    children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout
