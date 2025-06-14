
// import React, { useState, useEffect } from 'react';

// interface Video {
//   url: string;
//   clientName: string;
//   linkedinUrl: string;
//   linkedinHandle: string;
// }

// interface VideoPopupProps {
//   videoUrl: string;
//   onClose: () => void;
// }

// const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-4 relative w-3/4 max-w-4xl">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//         </button>
//         <video className="w-full h-96 rounded-lg" controls autoPlay>
//           <source src={videoUrl} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// const VideoCarousel: React.FC = () => {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState<'left' | 'right' | null>(null);

//   const videos: Video[] = [
//     {
//       url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
//       clientName: 'John Doe',
//       linkedinUrl: 'https://www.linkedin.com/in/johndoe',
//       linkedinHandle: '@johndoe',
//     },
//     {
//       url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
//       clientName: 'Jane Smith',
//       linkedinUrl: 'https://www.linkedin.com/in/janesmith',
//       linkedinHandle: '@janesmith',
//     },
//     {
//       url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
//       clientName: 'Alex Brown',
//       linkedinUrl: 'https://www.linkedin.com/in/alexbrown',
//       linkedinHandle: '@alexbrown',
//     },
//     {
//       url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
//       clientName: 'Emily Davis',
//       linkedinUrl: 'https://www.linkedin.com/in/emilydavis',
//       linkedinHandle: '@emilydavis',
//     },
//     {
//       url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
//       clientName: 'Michael Lee',
//       linkedinUrl: 'https://www.linkedin.com/in/michaellee',
//       linkedinHandle: '@michaellee',
//     },
//   ];

//   const videosPerPage = 2;
//   const totalPages = Math.ceil(videos.length / videosPerPage);

//   const handleNext = () => {
//     if (videos.length <= 1) return; // Do nothing if there's only one video
//     setDirection('right');
//     setCurrentIndex((prevIndex) => 
//       prevIndex + videosPerPage >= videos.length ? 0 : prevIndex + videosPerPage
//     );
//   };

//   const handlePrev = () => {
//     if (videos.length <= 1) return; // Do nothing if there's only one video
//     setDirection('left');
//     setCurrentIndex((prevIndex) => 
//       prevIndex - videosPerPage < 0 ? (totalPages - 1) * videosPerPage : prevIndex - videosPerPage
//     );
//   };

//   const handlePlayClick = (videoUrl: string) => {
//     setSelectedVideo(videoUrl);
//   };

//   const handleClosePopup = () => {
//     setSelectedVideo(null);
//   };

//   const displayedVideos = videos.slice(currentIndex, currentIndex + videosPerPage);

//   return (
//     <div className="flex flex-col items-center py-8 bg-gray-100">
//       <h3 className="text-teal-600 text-lg font-semibold">Founder Stories</h3>
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Clients' Experience</h1>
      
//       <div className="flex items-center space-x-8">
//         <button 
//           onClick={handlePrev}
//           className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200"
//         >
//           <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//           </svg>
//         </button>

//         <div className="overflow-hidden">
//           <div
//             className={`flex space-x-6 transition-transform duration-1000 ease-in-out ${
//               direction === 'right' ? '-translate-x-full' : direction === 'left' ? 'translate-x-full' : ''
//             }`}
//             style={{ animation: direction ? `${direction === 'right' ? 'slideInRight' : 'slideInLeft'} 1s forwards` : 'none' }}
//           >
//             {displayedVideos.map((video, index) => (
//               <div key={`${currentIndex}-${index}`} className="bg-white rounded-lg shadow-lg p-6 flex-shrink-0">
//                 <div className="relative w-96 h-56 bg-gray-300 rounded-lg flex items-center justify-center">
//                   <button
//                     onClick={() => handlePlayClick(video.url)}
//                     className="absolute w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center"
//                   >
//                     <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M8 5v14l11-7z"></path>
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="mt-3 text-sm text-gray-500">
//                   <p>{video.clientName}</p>
//                   <a
//                     href={video.linkedinUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-teal-600 hover:underline"
//                   >
//                     {video.linkedinHandle} | LinkedIn
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button 
//           onClick={handleNext}
//           className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200"
//         >
//           <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//           </svg>
//         </button>
//       </div>

//       {selectedVideo && (
//         <VideoPopup videoUrl={selectedVideo} onClose={handleClosePopup} />
//       )}

//       <style>
//         {`
//           @keyframes slideInRight {
//             from {
//               transform: translateX(100%);
//             }
//             to {
//               transform: translateX(0);
//             }
//           }

//           @keyframes slideInLeft {
//             from {
//               transform: translateX(-100%);
//             }
//             to {
//               transform: translateX(0);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default VideoCarousel;



import React, { useState, useEffect } from 'react';

interface Video {
  url: string;
  clientName: string;
  linkedinUrl: string;
  linkedinHandle: string;
}

interface VideoPopupProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 relative w-3/4 max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <video className="w-full h-96 rounded-lg" controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const VideoCarousel: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const videos: Video[] = [
    {
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      clientName: 'John Doe',
      linkedinUrl: 'https://www.linkedin.com/in/johndoe',
      linkedinHandle: '@johndoe',
    },
    {
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      clientName: 'Jane Smith',
      linkedinUrl: 'https://www.linkedin.com/in/janesmith',
      linkedinHandle: '@janesmith',
    },
    {
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      clientName: 'Alex Brown',
      linkedinUrl: 'https://www.linkedin.com/in/alexbrown',
      linkedinHandle: '@alexbrown',
    },
    {
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      clientName: 'Emily Davis',
      linkedinUrl: 'https://www.linkedin.com/in/emilydavis',
      linkedinHandle: '@emilydavis',
    },
    {
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      clientName: 'Michael Lee',
      linkedinUrl: 'https://www.linkedin.com/in/michaellee',
      linkedinHandle: '@michaellee',
    },
  ];

  const videosPerPage = 2;
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const handleNext = () => {
    if (videos.length <= 1) return;
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex + videosPerPage >= videos.length ? 0 : prevIndex + videosPerPage
    );
  };

  const handlePrev = () => {
    if (videos.length <= 1) return;
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex - videosPerPage < 0 ? (totalPages - 1) * videosPerPage : prevIndex - videosPerPage
    );
  };

  const handlePlayClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleClosePopup = () => {
    setSelectedVideo(null);
  };

  const displayedVideos = videos.slice(currentIndex, currentIndex + videosPerPage);

  return (
    <div className="flex flex-col items-center py-8 bg-gray-100">
      <h3 className="text-teal-600 text-lg font-semibold">Founder Stories</h3>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Clients' Experience</h1>
      
      <div className="flex items-center space-x-8">
        <button 
          onClick={handlePrev}
          className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200"
        >
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <div className="overflow-hidden">
          <div
            className={`flex space-x-6 transition-transform duration-1000 ease-in-out ${
              direction === 'right' ? '-translate-x-full' : direction === 'left' ? 'translate-x-full' : ''
            }`}
            style={{ animation: direction ? `${direction === 'right' ? 'slideInRight' : 'slideInLeft'} 1s forwards` : 'none' }}
          >
            {displayedVideos.map((video, index) => (
              <div key={`${currentIndex}-${index}`} className="bg-white rounded-lg shadow-lg p-6 flex-shrink-0">
                <div className="relative w-96 h-56 bg-gray-300 rounded-lg flex items-center justify-center">
                  <button
                    onClick={() => handlePlayClick(video.url)}
                    className="absolute w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </button>
                </div>
                <div className="mt-3 text-sm text-gray-500">
                     <a
                    href={video.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline flex items-center space-x-1"
                  >
                    
                    <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.028-3.06-1.866-3.06-1.868 0-2.154 1.459-2.154 2.966v5.698h-3v-11h2.878v1.496h.041c.401-.761 1.386-1.557 2.848-1.557 3.044 0 3.603 2.002 3.603 4.604v6.457z"/>
                    </svg>
                  </a>
                  <p>{video.clientName}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleNext}
          className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200"
        >
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {selectedVideo && (
        <VideoPopup videoUrl={selectedVideo} onClose={handleClosePopup} />
      )}

      <style>
        {`
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }

          @keyframes slideInLeft {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default VideoCarousel;