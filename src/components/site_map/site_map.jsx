import React, {useState, memo} from 'react';
import styles from './site_map.module.css';
import headerData from '../../data/header.json';

const SiteMap = memo(({isOpenSiteMap, closeSiteMap}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <div className={`${styles[`site-map`]} ${isOpenSiteMap ? styles.open : ''}`}>
      <div className={styles[`site-gnb`]}>
        <div className={styles.container}>
          <ul className={styles[`gnb-list`]}>
            {
              headerData.siteMap.gnbList.map(item => (
                <li key={item.index} className={`${styles[`gnb-list-item`]} ${currentIndex === item.index ? styles.active : ''}`}>
                  <span onClick={() => setCurrentIndex(item.index)}>{item.title}</span>
                </li>
              ))
            }
          </ul>
          <button className={styles[`close-btn`]} onClick={() => closeSiteMap()}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div className={`${styles.recruit} ${styles[`bg${currentIndex}`]}`}>
        <div className={styles.container}>
          <ul className={styles[`gnb-category-list`]}>
            {
              headerData.siteMap.categorys.map(item => (
                <li key={item.index} className={`${styles[`gnb-category`]} ${currentIndex === item.index ? styles.active : ''}`}>
                    <div className={styles[`category-left`]}>
                      {
                        item.category1.map(category => (
                          <dl key={category.title} className={styles.col}>
                            <dt className={styles[`col-title`]}>
                              <a href={category.link}>
                                {category.title}
                              </a>
                            </dt>
                            <dd>
                              <ul className={styles[`sub-category-list`]}>
                                {
                                  category.subCategorys.map(subCategory => (
                                    <li key={subCategory.title} className={styles[`sub-category`]}>
                                      <a href={subCategory.link}>
                                        {subCategory.title}
                                      </a>
                                      {
                                        subCategory.subCategorys && subCategory.subCategorys.length > 0 &&
                                        <ul className={styles.depth}>
                                          {
                                         subCategory.subCategorys.map(sub => (
                                            <li key={sub.title} className={styles[`depth-item`]}>
                                              <a href={sub.link}>
                                                {sub.title}
                                              </a>
                                            </li>
                                        ))
                                        }
                                      </ul>
                                      }
                                    </li>
                                  ))
                                }
                              </ul>
                            </dd>
                          </dl>
                        ))
                      }
                    </div>
                    <div className={styles[`category-right`]}>
                      {
                        item.category2.map(category => (
                          <dl key={category.title} className={styles.col}>
                            <dt className={styles[`col-title`]}>
                              <a href={category.link}>
                                {category.title}
                              </a>
                            </dt>
                            <dd>
                              <ul className={styles[`sub-category-list`]}>
                                {
                                  category.subCategorys.map(subCategory => (
                                    <li key={subCategory.title} className={styles[`sub-category`]}>
                                      <a href={subCategory.link}>
                                        {subCategory.title}
                                      </a>
                                      {
                                      subCategory.subCategorys && subCategory.subCategorys.length > 0 &&
                                      <ul className={styles.depth}>
                                        {
                                         subCategory.subCategorys.map(sub => (
                                            <li key={sub.title} className={styles[`depth-item`]}>
                                              <a href={sub.link}>
                                                {sub.title}
                                              </a>
                                            </li>
                                        ))}
                                      </ul>
                                      }
                                    </li>
                                  ))
                                }
                              </ul>
                            </dd>
                          </dl>
                        ))
                      }
                    </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
});

export default SiteMap;