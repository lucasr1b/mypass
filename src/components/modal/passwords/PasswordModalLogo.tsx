import { useEffect, useState } from 'react';
import styles from './PasswordModalLogo.module.scss';

type ModalLogoProps = {
  websiteURL: string;
  logo: any;
  setLogo: any;
}

const ModalLogo = (props: ModalLogoProps) => {

  const [isWebsiteURLValid, setIsWebsiteURLValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const handleWebsiteURLValidity = () => {
      const pattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      const isValid = pattern.test(props.websiteURL);
      if (isValid) {
        setIsWebsiteURLValid(true);
        setIsDisabled(false);
      } else {
        setIsWebsiteURLValid(false);
        setIsDisabled(true);
      }
    }
    handleWebsiteURLValidity();
  }, [props]);

  const getDomainOnly = (websiteURL: string) => {
    const domainOnly = websiteURL.replace(/(^\w+:|^)\/\//, '').replace(/\/+$/, '');
    return domainOnly;
  }

  const fetchFaviconFromWebsite = (websiteURL: string) => {
    props.setLogo(`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${getDomainOnly(websiteURL)}/&size=256`);
  }

  return (
    <div className={styles.logo}>
      <div className={styles.favicon}>
        <img src={props.logo} />
      </div>
      <span>OR</span>
      <div>
        <button className={styles.fetch} type='button' disabled={isDisabled} onClick={() => fetchFaviconFromWebsite(props.websiteURL)}>Fetch favicon from website</button>
        {!props.websiteURL && <span className={styles.fetchRequirement}>Website URL is required to fetch</span>}
        {props.websiteURL && !isWebsiteURLValid && <span className={styles.fetchRequirement}>A valid website URL is required to fetch</span>}
        {props.websiteURL && isWebsiteURLValid && <span className={styles.fetchRequirement}>Fetch from {getDomainOnly(props.websiteURL)}</span>}
      </div>
    </div>
  )
}

export default ModalLogo;