// import { useState } from "react";
// import { BsMoonStarsFill } from "react-icons/bs";
// import { IoMdSunny } from "react-icons/io";
// import { Button } from "../components/ui/button";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
//   TooltipProvider
// } from "../components/ui/tooltip";

// export function ModeToggle() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     document.body.className = newTheme; // Apply the theme to the body or a root element
//   };

//   return (
//     <TooltipProvider disableHoverableContent>
//       <Tooltip delayDuration={100}>
//         <TooltipTrigger asChild>
//           <Button
//             className="rounded-full w-8 h-8 bg-background"
//             variant="outline"
//             size="icon"
//             onClick={toggleTheme}
//           >
//             <IoMdSunny className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
//             <BsMoonStarsFill className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
//             <span className="sr-only">Switch Theme</span>
//           </Button>
//         </TooltipTrigger>
//         <TooltipContent side="bottom">Switch Theme</TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// }
