import React from 'react';
import styles from './family_modal.module.css';
import footerData from '../../data/footer.json';

const FamilyModal = ({closeModal, isOpenModal}) => {

    const familySiteList = footerData.familySite.map(item => (
      <dl key={item.title}>
        <dt>{item.title}</dt>
        <dd>
          <ul>
            {item.category.map(category => 
              <li key={category.title}>
                <a href={category.link} title={category.title}>
                  {category.title}
                </a>
              </li>
              )}
          </ul>
        </dd>
      </dl>
    ))

  return (
    <div className={`${styles[`family-modal`]}  ${isOpenModal ? styles.active : '' }`}>
      <button className={styles.closeBtn}
        aria-label="popup close button"
        onClick={closeModal}>
        <i></i>
      </button>
      <div className={styles[`family-modal-box`]}>
        <div className={styles.content}>
          {familySiteList}
        </div>
      </div>
    </div>
  );
};

export default FamilyModal;