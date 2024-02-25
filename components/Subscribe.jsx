// import React, { useState } from 'react';

// const Modal = () => {
//   const [openModal, setModal] = useState(false);
//   const handleModal = () => {
//     setModal(!openModal)
  
// export default function Subscribe() {
//   return (
//     <div>
//       <button
//         type='button'
//         className='h-10 px-4 font-medium text-sm rounded-md text-white bg-gray-900'
//         onClick={handleModal}
//       >Open Modal</button>
//       {openModal &&
//         <div className='fixed top-0 left-0 w-full h-full bg-gray-300 flex justify-center items-center'>
//           <div className='max-w-[460px] bg-white shadow-lg py-2 rounded-md'>
//             <h2 className='text-sm font-medium text-gray-900 border-b border-gray-300 py-3 px-4 mb-4'>This is my modal.</h2>
//             <div className='px-4 pb-4'>
//               <p className='text-sm font-medium text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quod quis eaque aliquam necessitatibus vel eligendi laboriosam optio quisquam sunt.</p>
//             </div>
//             <div className='border-t border-gray-300 flex justify-between items-center px-4 pt-2'>
//               <div className='text-sm font-medium text-gray-700'>Example Content</div>
//               <button
//                 type='button'
//                 className='h-8 px-2 text-sm rounded-md bg-gray-700 text-white'
//                 onClick={handleModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       }

//     </div>
//   );
// };


import React, { useState } from 'react';


 

export default function Subscribe() {
  const [openModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!openModal)
  }
  
    return (
          <div>
            
            <div className="p-6  mt-8 bg-gray-200/25 dark:text-gray-500  shadow rounded text-center overflow-hidden border-amber-400 border-1 shadow-md rounded dark:bg-gray-800/25">
        <h3 className="mb-2 text-xl font-bold dark:text-yellow-400 text-gray-500 sm:text-2xl">Newsletter</h3>
        <p className="mb-6 text-gray-500 text-sm">Subscribe & be notified when new articles & stuff are posted here. I won't spam or publish your email addresses. Unsubscribe anytime.
</p>
        <div href="/about" className="mb-10">
            <button onClick={handleModal}
              type="button"
              className="py-2 px-6  text-gray-500 outline outline-1  font-bold hover:outline-2 rounded-full text-xs hover:text-cyan-700 dark:hover:text-cyan-700"
              onclick="openModal('modelConfirm')">
              Subscribe to Newsletter
            </button>
            </div>
      </div>
      {openModal &&
        <div className='fixed top-0 left-0 w-full h-full bg-gray-300 flex justify-center items-center'>
          <div className='max-w-[460px] bg-white shadow-lg py-2 rounded-md'>
            <h2 className='text-sm font-medium text-gray-900 border-b border-gray-300 py-3 px-4 mb-4'>Subscribe to Newsletter</h2>
            <div className='px-4 pb-4'>
              <p className='text-sm font-medium text-gray-700'>Insert newsletter subscription form here</p>
            </div>
            <div className='border-t border-gray-300 flex justify-between items-center px-4 pt-2'>
              <div className='text-sm font-medium text-gray-700'>Newsletter</div>
              <button
                type='button'
                className='h-8 px-2 text-sm rounded-md bg-gray-700 text-white'
                onClick={handleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      }

    </div>
//         <div className="p-6  mt-8 bg-gray-200/25 dark:text-gray-500  shadow rounded text-center overflow-hidden border-amber-400 border-1 shadow-md rounded dark:bg-gray-800/25">
//         <h3 className="mb-2 text-xl font-bold dark:text-yellow-400 text-gray-500 sm:text-2xl">Newsletter</h3>
//         <p className="mb-6 text-gray-500 text-sm">Subscribe & be notified when new articles & stuff are posted here. I won't spam or publish your email addresses. Unsubscribe anytime.
// </p>
//         <div href="/about" className="mb-10">
//             <button
//               type="button"
//               className="py-2 px-6  text-gray-500 outline outline-1  font-bold hover:outline-2 rounded-full text-xs hover:text-cyan-700 dark:hover:text-cyan-700"
//               onclick="openModal('modelConfirm')">
//               Subscribe to Newsletter
//             </button>
//             </div>
//       </div>
    );
  }