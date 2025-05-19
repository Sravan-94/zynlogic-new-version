import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-6 md:py-8">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-center md:text-end text-sm font-medium">We Follow Industry Standards</p>
                    </div>
                    <div className="relative py-3 md:py-4 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                    loading="lazy"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                    loading="lazy"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                    loading="lazy"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background"></div>
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}



// import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
// import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';

// export default function LogoCloud() {
//   return (
//     <section className="bg-background overflow-hidden py-4 sm:py-6 md:py-8">
//       <div className="group relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center md:flex-row gap-4 md:gap-6">
//           <div className="w-full md:w-48 flex items-center justify-center md:justify-end md:border-r md:pr-4">
//             <p className="text-xs sm:text-sm md:text-sm font-medium text-center md:text-right leading-tight">
//               We Follow Industry Standards
//             </p>
//           </div>
//           <div className="relative w-full md:w-[calc(100%-12rem)] py-2 sm:py-3 md:py-4">
//             <InfiniteSlider
//               speedOnHover={20}
//               speed={40}
//               gap={32}
//               className="flex items-center"
//               aria-label="Industry partner logos"
//             >
//               <div className="flex shrink-0">
//                 <img
//                   className="mx-auto h-4 sm:h-5 md:h-5 w-auto dark:invert"
//                   src="https://html.tailus.io/blocks/customers/nvidia.svg"
//                   alt="Nvidia Logo"
//                   height="20"
//                   width="auto"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="flex shrink-0">
//                 <img
//                   className="mx-auto h-3 sm:h-4 md:h-4 w-auto dark:invert"
//                   src="https://html.tailus.io/blocks/customers/column.svg"
//                   alt="Column Logo"
//                   height="16"
//                   width="auto"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="flex shrink-0">
//                 <img
//                   className="mx-auto h-3 sm:h-4 md:h-4 w-auto dark:invert"
//                   src="https://html.tailus.io/blocks/customers/github.svg"
//                   alt="GitHub Logo"
//                   height="16"
//                   width="auto"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="flex shrink-0">
//                 <img
//                   className="mx-auto h-4 sm:h-5 md:h-5 w-auto dark:invert"
//                   src="https://html.tailus.io/blocks/customers/nike.svg"
//                   alt="Nike Logo"
//                   height="20"
//                   width="auto"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="flex shrink-0">
//                 <img
//                   className="mx-auto h-4 sm:h-5 md:h-5 w-auto dark:invert"
//                   src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
//                   alt="Lemon Squeezy Logo"
//                   height="20"
//                   width="auto"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="flex shrink-0">
//                 <img
//                   className="mx-auto h-3 sm:h-4 md:h-4 w-auto dark:invert"
//                   src="https://html.tailus.io/blocks/customers/laravel.svg"
//                   alt="Laravel Logo"
//                   height="16"
//                   width="auto"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="flex shrink-0">
//                 <img
//                   className="mx-auto h-5 sm:h-6 md:h-7 w-auto dark:invert"
//                   src="https://html.tailus.io/blocks/customers/lilly.svg"
//                   alt="Lilly Logo"
//                   height="28"
//                   width="auto"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="flex shrink-0">
//                 <img
//                   className="mx-auto h-4 sm:h-5 md:h-6 w-auto dark:invert"
//                   src="https://html.tailus.io/blocks/customers/openai.svg"
//                   alt="OpenAI Logo"
//                   height="24"
//                   width="auto"
//                   loading="lazy"
//                 />
//               </div>
//             </InfiniteSlider>
//             <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-background"></div>
//             <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-background"></div>
//             <ProgressiveBlur
//               className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 md:w-20"
//               direction="left"
//               blurIntensity={1}
//             />
//             <ProgressiveBlur
//               className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 md:w-20"
//               direction="right"
//               blurIntensity={1}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }