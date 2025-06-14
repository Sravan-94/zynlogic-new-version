// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { MoveRight, PhoneCall } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// function Hero() {
//   const [titleNumber, setTitleNumber] = useState(0);
//   const titles = useMemo(
//     () => ["Websites", "Apps", "Platforms", "Solutions", "Software"],
//     []
//   );

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       if (titleNumber === titles.length - 1) {
//         setTitleNumber(0);
//       } else {
//         setTitleNumber(titleNumber + 1);
//       }
//     }, 2000);
//     return () => clearTimeout(timeoutId);
//   }, [titleNumber, titles]);

//   return (
//     <div className="w-full">
//       <div className="container mx-auto">
//         <div className="flex gap-4 py-8 md:py-12 items-center justify-center flex-col">
          
//           {/* 👇🏻 Add this new card above title */}
//           <div className="flex items-center space-x-3 rounded-full border px-1 py-1 shadow-sm bg-white" style={{ borderColor: "#a9a9aa", borderWidth: "2px" }}>
//             {/* Profile Images */}
//             <div className="flex -space-x-3">
//               <img
//                 className="w-8 h-8 rounded-full border-2 border-white"
//                 src="https://randomuser.me/api/portraits/men/32.jpg"
//                 alt="Client 1"
//               />
//               <img
//                 className="w-8 h-8 rounded-full border-2 border-white"
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 alt="Client 2"
//               />
//               <img
//                 className="w-8 h-8 rounded-full border-2 border-white"
//                 src="https://randomuser.me/api/portraits/men/65.jpg"
//                 alt="Client 3"
//               />
//               <img
//                 className="w-8 h-8 rounded-full border-2 border-white"
//                 src="https://randomuser.me/api/portraits/women/22.jpg"
//                 alt="Client 4"
//               />
//             </div>
//             {/* Text */}
//             <p className="text-medium font-medium text-black">
//               500+ Clients 
//             </p>
//           </div>
          
//           {/* Existing title + motion */}
//           <div className="flex gap-25 flex-col">
//             <h1 className="text-4xl md:text-4xl max-w-2xl tracking-tighter text-center font-regular">
//               <span className="text-spektr-cyan-50">Transforming Ideas into Powerful</span>
//               <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-2 md:pt-1">
//                 &nbsp;
//                 {titles.map((title, index) => (
//                   <motion.span
//                     key={index}
//                     className="absolute font-semibold will-change-transform"
//                     initial={{ opacity: 0, y: "-100" }}
//                     transition={{ type: "spring", stiffness: 100, damping: 15 }}
//                     animate={
//                       titleNumber === index
//                         ? {
//                             y: 0,
//                             opacity: 1,
//                           }
//                         : {
//                             y: titleNumber > index ? -150 : 150,
//                             opacity: 0,
//                           }
//                     }
//                   >
//                     {title}
//                   </motion.span>
//                 ))}
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
//               Custom code, crafted with care, designed for your growth.
//             </p>
//           </div>

//           <div className="flex flex-row gap-3 mt-1">
//           <Button asChild size="lg" className="gap-2" variant="outline">
//   <a href="tel:9966100311">
//     Jump on a call <PhoneCall className="w-4 h-4" />
//   </a>
// </Button>
//             <Button 
//               asChild 
//               size="lg" 
//               className="gap-2 bg-[#966cf7] text-black hover:bg-[#966cf7]"
//             >
//               <Link to="/contact">
//                 Sign up here <MoveRight className="w-4 h-4" />
//               </Link>
//             </Button>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export { Hero };

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Websites", "Apps", "Platforms", "Solutions", "Software"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-4 py-1 md:py-12 items-center justify-center flex-col">
          
          {/* 👇🏻 Client Images Card */}
          <div className="flex items-center space-x-3 rounded-full border px-1 py-1 shadow-sm bg-white" style={{ borderColor: "#a9a9aa", borderWidth: "2px" }}>
            <div className="flex -space-x-3">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client 1"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Client 2"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="Client 3"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="Client 4"
              />
            </div>
            <p className="text-medium font-medium text-black">500+ Clients</p>
          </div>

          {/* 👇🏻 Hero Title + Animated Text */}
          <div className="flex gap-6 flex-col items-center text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-regular tracking-tight leading-tight max-w-sm sm:max-w-lg md:max-w-2xl">
              <span className="text-spektr-cyan-50">Transforming Ideas into Powerful</span>
              <span className="relative flex w-full justify-center overflow-hidden md:pb-2 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold will-change-transform"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-sm sm:max-w-md md:max-w-2xl">
              Custom code, crafted with care, designed for your growth.
            </p>
          </div>

          {/* 👇🏻 Buttons */}
          <div className="flex flex-row gap-3 mt-1">
            <Button asChild size="lg" className="gap-2" variant="outline">
              <a href="tel:7675953062">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="gap-2 bg-[#966cf7] text-black hover:bg-[#966cf7]"
            >
              <Link to="/contact">
                Sign up here <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export { Hero };
