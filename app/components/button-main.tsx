'use client'

// import Link from 'next/link';

const Buttons = () => {
  const handleDownload = () => {
    const fileUrl = './cv.pdf'; // Adjust the path based on your project structure
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'cv.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button
      className='text-md px-6 text-center hover:bg-white text-white transition-all hover:text-[#676394] py-2 border border-solid border-white rounded-full'
      type='button'
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
};

export default Buttons;
