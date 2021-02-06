import React, {useState, useRef, useEffect} from 'react';
import styles from './search_box.module.css';

const SearchBox = ({isShowSearchBox, closeSearchBox}) => {
  const formRef = useRef();
  const inputRef = useRef();
  const [recentSearch, setRecentSearch] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: Date.now(),
      value : inputRef.current.value,
      link: '',
    }
    setRecentSearch(items => {
      const update = {...items};
      update[obj.id] = obj;
      return update;
    }
    )
    formRef.current.reset();
  }

  useEffect(() => {
    
  }, []);
  const display = isShowSearchBox ? styles['open-search'] : '';

  return (
    <div className={`${styles[`search-box`]} ${display}`}>
      <div className={styles.container}>
        <div className={styles[`search-area`]}>
          <div className={`${styles.icon} ${styles[`search-prepend`]}`}>
            <i className="fas fa-search"></i>
          </div>
          <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className={styles.input} placeholder="검색어를 입력하세요"/>
          </form>
          <div className={`${styles.icon} ${styles[`search-append`]}`}>
            <button aria-label="close" onClick={() => closeSearchBox()}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className={styles[`auto-compile`]}>
          <dl className={styles[`auto-compile-list`]}>
            <dt className={styles.title}>
                인기검색어
            </dt>
            <dd>
              <ul className={styles.list}>
                <li>
                  <a href="#a">
                    짜파게티
                  </a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl className={styles[`auto-compile-recent`]}>
            <dt className={styles.title}>
              나의 최근 검색어
            </dt>
            <dd>
              <ul className={styles.list}>
                {
                  Object.keys(recentSearch).map(key => (
                    <li key={key}>
                      <a href={recentSearch[key].link}>
                        {recentSearch[key].value}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;