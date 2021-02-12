import React from 'react';
import styles from './etc.module.css';

const Etc = () => {


  return (
    <article className={styles.etc}>
      <div className={styles.content}>
        <ul className={styles[`etc-list`]}>
          <li className={styles[`etc-item`]}>
            <a href="#a" >
              <dl className={styles.stock}>
                <dt>실시간 주가정보</dt>
                <dd>288,500</dd>
              </dl>
              <ul className={styles.volume}>
                <li> 
                  <span>전일대비</span>
                  <span className={styles[`volume-down`]}>
                    2,500
                  </span>
                </li>
                <li> 
                  <span>등락율</span>
                  <span className={styles.rate}>
                    -0.86
                  </span>
                </li>
              </ul>
            </a>
          </li>
          <li className={styles[`etc-item`]}>
            <a href="#a" >
              <dl>
                <dt className={styles.icon}>
                  <i className="fas fa-phone-alt"></i>
                </dt>
                <dd className={styles.desc}>
                  <strong>cs center</strong>
                  <span>언제나 고객님의 곁에서 소중한 의견에 귀 기울이겠습니다.</span>
                </dd>
            </dl>
            </a>
          </li>
          <li className={styles[`etc-item`]}>
            <a href="#a" >
              <dl>
                <dt className={styles.icon}>
                  <i className="fas fa-industry"></i>
                </dt>
                <dd className={styles.desc}>
                  <strong>factory tour</strong>
                  <span>공장 견학을 통해 농심 제품의 생생한 제조 공정을 직접 체험해보세요.</span>
                </dd>
            </dl>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Etc;