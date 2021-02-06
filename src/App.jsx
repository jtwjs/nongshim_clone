
import styles from'./App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
      )
}

export default App;
