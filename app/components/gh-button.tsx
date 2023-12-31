'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GHButtons = () => {
  const handleGitHubRedirect = () => {
    window.open('https://github.com/masyhudiaffandi', '_blank'); // Ganti 'username' dengan username GitHub Anda
  };

  return (
    <>
        <button 
            className=' text-md 77md:text-lg py-2 px-[12px] text-center hover:bg-white text-white transition-all      hover:text-[#676394] border border-solid border-white rounded-full'        
            type='button'
            onClick={handleGitHubRedirect}>        
            <FontAwesomeIcon
                icon={faGithub}
                className='padding-0'
            />
        </button>
    </>
  );
};

export default GHButtons;
