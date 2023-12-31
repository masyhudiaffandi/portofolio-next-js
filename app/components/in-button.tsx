'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkButtons = () => {
  const handleGitHubRedirect = () => {
    window.open('https://www.linkedin.com/in/masyhudi-affandi-333726285/://github.com/masyhudiaffandi', '_blank'); 
  };

  return (
    <>
        <button 
            className=' text-md 77md:text-lg py-2 px-[12px] text-center hover:bg-white text-white transition-all      hover:text-[#676394] border border-solid border-white rounded-full'        
            type='button'
            onClick={handleGitHubRedirect}>        
            <FontAwesomeIcon
                icon={faLinkedin}
                className='padding-0'
            />
        </button>
    </>
  );
};

export default LinkButtons;
