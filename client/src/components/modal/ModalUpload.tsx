import { useEffect, useState } from 'react';
import './ModalUpload.scss';
import { CloudUpload } from 'react-bootstrap-icons';

type ModalUploadProps = {
  websiteURL: string;
  logo: any;
  setLogo: any;
}

const ModalUpload = (props: ModalUploadProps) => {

  const [isWebsiteURLValid, setIsWebsiteURLValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

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

  const fetchFaviconFromWebsite = (websiteURL: string) => {
    const websiteDomain = websiteURL.replace(/(^\w+:|^)\/\//, '').replace(/\/+$/, '');
    props.setLogo(`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${websiteDomain}/&size=256`);
    setHasFetched(true);
  }

  return (
    <div className='ModalUpload'>
      {hasFetched ?
        <img src={props.logo} />
        :
        <button type='button' className='ModalUpload__Image'>
          <CloudUpload />
          Upload Logo
        </button>
      }
      <span>OR</span>
      <div>
        <button className='ModalUpload__Fetch' type='button' disabled={isDisabled} onClick={() => fetchFaviconFromWebsite(props.websiteURL)}>Fetch favicon from website</button>
        {!isWebsiteURLValid && <span className='ModalUpload__Fetch__Requirement'>Website URL is required to fetch</span>}
      </div>
    </div>
  )
}

export default ModalUpload;