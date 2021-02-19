import React, {useState, memo} from 'react';
import FamilyModal from '../family_modal/family_modal';
import styles from './footer.module.css';
import facebookImg from '../../assets/img/footer/facebook.svg';
import instargramImg from '../../assets/img/footer/instagram.svg';
import youtubeImg from '../../assets/img/footer/youtube.svg';
import blogImg from '../../assets/img/footer/blog.png';
import webAccessImg from '../../assets/img/footer/web-accessibility.png';
import footerData from '../../data/footer.json';

const imgList = [facebookImg,instargramImg,youtubeImg,blogImg];

const Footer = memo(({isShowButtonTop}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const linksList = footerData.links.map(item => (
    <li key={item.title}>
      <a href={item.link}
       className={item.color ? styles[item.color] : ''}>
          {item.title}
       </a>
    </li>
  ));

    const info = ["㈜농심", "서울특별시 동작구 여의대방로 112 (신대방동)", "사업자등록번호 118-81-03914", "대표이사 박준", "대표전화 02.820.7114", "고객센터 080.023.5181"];
    const infoList = info.map(item => (
      <li key={item}>{item}</li>
    ));


    const socialList = footerData.social.map((item, index) => (
      <li key={item.title}>
        <a href={item.link} target="_blank" title={item.title} rel='noreferrer'>
          <img src={imgList[index]} alt={item.title}/>
        </a>
      </li>
    ))


    const openModal = () => {
      setIsOpenModal(true);
    }

    const closeModal = () => {
      setIsOpenModal(false);
    }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles[`family-site`]} ${isOpenModal ? styles.open : ''}`}>
          <button className={styles[`family-link`]} onClick={openModal}>
            패밀리 사이트
          </button>
          <FamilyModal closeModal={closeModal}
            isOpenModal={isOpenModal}/>
        </div>
        <div className={styles[`content-left`]}>

          <div className={styles.links}>
              <ul>
                {linksList}
              </ul>
          </div>
          <div className={styles.info}>
            <ul>
              {infoList}
            </ul>
          </div>
          <div className={styles.copyright}>
            &copy; 2021woong.allrightsreserved
          </div>
        </div>
        <div className={styles[`content-right`]}>
          <div className={styles.social}>
              <ul>
                {socialList}
              </ul>
              <div className={styles.webmark}>
                <a href="http://www.webwatch.or.kr/Situation/WA_Situation.html?MenuCD=110" target="_blank" rel='noreferrer'>
                  <img src={webAccessImg} alt="웹접근성"/>
                </a>
              </div>
          </div>
        </div>
      </div>
      <button className={`${styles[`button-top`]} ${isShowButtonTop ? styles.active : ''}`}
       aria-label="back to top"
       onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
});

export default Footer;