import { useEffect, useState } from 'react';
import styles from './ModalFavicon.module.scss';

type ModalFaviconProps = {
  websiteURL: string;
  favicon: any;
  setFavicon: any;
}

const ModalFavicon = (props: ModalFaviconProps) => {

  const [isWebsiteURLValid, setIsWebsiteURLValid] = useState(false);

  useEffect(() => {
    const handleWebsiteURLValidity = () => {
      const pattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      const isValid = pattern.test(props.websiteURL);
      if (isValid) {
        setIsWebsiteURLValid(true);
      } else {
        setIsWebsiteURLValid(false);
      }
    }
    handleWebsiteURLValidity();
  }, [props]);

  const getDomainOnly = (websiteURL: string) => {
    const domainOnly = websiteURL.replace(/(^\w+:|^)\/\//, '').replace(/\/+$/, '');
    return domainOnly;
  }

  const fetchFaviconFromWebsite = (websiteURL: string) => {
    props.setFavicon(`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${getDomainOnly(websiteURL)}/&size=256`);
  }

  return (
    <div className={styles.favicon}>
      <div className={styles.container}>
        <img src={props.favicon} />
      </div>
      <span>OR</span>
      <div>
        <button className={styles.fetch} type='button' disabled={!isWebsiteURLValid} onClick={() => fetchFaviconFromWebsite(props.websiteURL)}>Fetch favicon from website</button>
        {!props.websiteURL && <span className={styles.fetchRequirement}>Website URL is required to fetch</span>}
        {props.websiteURL && !isWebsiteURLValid && <span className={styles.fetchRequirement}>A valid website URL is required to fetch</span>}
        {props.websiteURL && isWebsiteURLValid && <span className={styles.fetchRequirement}>Fetch from {getDomainOnly(props.websiteURL)}</span>}
      </div>
    </div>
  )
}

export default ModalFavicon;