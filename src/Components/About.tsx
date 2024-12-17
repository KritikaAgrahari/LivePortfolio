// // import { useEffect, useState } from "react";
// // import { Info } from "../User";
// // //@ts-ignore
// // import DOTS from "vanta/src/vanta.dots";
// // import  profile  from "./profile.png";
// // //@ts-ignore
// // import TRUNK from "vanta/src/vanta.trunk";
// // import Typewriter from "typewriter-effect";
// // import { Button } from '@mantine/core';
// // const About=()=>{
// //     //imported from npm see vanta take react hooks where there is vanta check in what you want seeing vanta webiste changed to dots

// //     const [dots,setDots] = useState<any>(null);
// //     const [trunk,setTrunk] = useState<any>(null);

    
// //     useEffect(() => {
// //       if (!dots) {
// //         setDots(DOTS({
// //             el: "#bg",
// //             mouseControls: true,
// //             touchControls: true,
// //             gyroControls: false,
// //             minHeight: 200.00,
// //             minWidth: 200.00,
// //             scale: 1.00,
// //             scaleMobile: 1.00,
// //             color: 0x64FFDA,
// //             color2: 0x204aff,
// //             // backgroundColor: 0x112240,// cant use #so use 0, last two zweroes means opacity is zero it becomes transparent otherwise header becomes dark blue
// //             backgroundColor:0x0A192F,
// //             size: 2.8,
// //             showLines:false,
// //             spacing:20
// //         }))
// //       }

// //       if(!trunk){
// //         setTrunk(TRUNK({
// //             el:"#photo",
// //             mouseControls:true,
// //             touchControls:true,
// //             gyroControls:false,
// //             minHeight:200.00,
// //             minWidth:200.00,
// //             scale:1.00,
// //             scaleMobile:1.00,
// //             color:0x64FFDA,
// //             backgroundColor:0x112240,
// //             spacing:0,
// //             chaos:4.00


// //         })

// //         )
// //       }

// //       //SO memory dont becomes full
// //       return () => {
// //         if (dots) dots.destroy();
// //         if (trunk) trunk.destroy();

            
// //       }
// //     }, [ ])// dots remove so wherenver changes made it itself runs
// //     return(
// //         <div className='flex overflow-hidden justify-around items-center font-mono  px-16 h-[80vh]' id="bg">
// //             <div className="ml-20 w-3/5 flex flex-col">
// //                 <div className="text-primaryColor text-3xl">Hi, I am</div>
// //                 <div className="text-[4.2rem] font-extrabold"  style={{ color: 'white' }}> {Info.name} </div>
// //                 <div className=" text-4xl  flex font-semibold "  style={{ color: 'white' }}>I'm a&nbsp; <span className="text-primaryColor"> <Typewriter
// //                //copied fom type writer effect npm.js
// //                 options={{strings:Info.stack,
// //                   autoStart: true,
// //                   loop: true,
// //                 }}
// //               />  </span></div>
// //                 <div className="text-textColor text-xl w-[90%] text-justify  my-8 font-semibold"> { Info.bio }</div>
// //                 <Button  component="a" href="https://github.com/KritikaAgrahari/Resume/blob/main/Kritikacv.pdf" target="_blank" className= "!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA"  radius="md">Check Resume</Button>
// //             </div>
// //             <div className="h-[60vh] flex justify-center items-center overflow-hidden rounded-full  mr-14 w-[25vw]" id="photo"> 
// //               <img  className ="w-[85%]  rounded-full shadow-xl" src="/KRITIKA.png" alt="profile" />
// //             </div>
// //         </div>

// //     )

// // }
// // export default About;


// import { Info } from "../User";
// import Typewriter from "typewriter-effect";
// import { Button, useMatches } from "@mantine/core";
// import ResumeViewer from "./ResumeViewer";
// import { useDisclosure } from "@mantine/hooks";
// import { IconDownload } from "@tabler/icons-react";
// import Particles from "./magicui/Particles";
// import { NeonGradientCard } from "./magicui/neon-gradient-card";
// const About = () => {
//     const [opened, { open, close }] = useDisclosure(false);
//     // const btn =useMatches({
//     //     xs:'xs',
//     //     sm:'sm',
//     //     md:'md',
//     //     lg:'lg'
//     // })
//     return (
//         <>
//         <div data-aos="zoom-out-up" data-aos-duration="800" className="mt-28 flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6" id="About">

//         <div className="flex relative overflow-hidden justify-around items-center font-mono px-16 h-[82vh]" id="bg">
//         <Particles
//                     className="absolute -z-20 inset-0"
//                     quantity={1000}
//                     ease={80}
//                     vx={.1}
//                     vy={.1}
//                     color="#64FFDA"
//                     refresh
//         />
//             <div className="ml-20 w-3/5 flex flex-col lg-mx:gap-3">
//             <div className="text-primaryColor text-3xl lg-mx:text-2xl"> Hi, Iam</div>
//             <div className=" text-[4.25rem] font-extrabold font-extrabold lg-mx:text" style={{ color: 'white' }}>{Info.name}</div>
//             <div className="text-4xl flex font-semibold lg-mx:text-3xl" style={{ color: 'white' }}> I'm a &nbsp; <span className ="text-primaryColor"><Typewriter options={{ strings: Info.stack, autoStart:true, loop:true , }} /></span></div>
//             <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-9 font-semibold lg-mx:text-lg ">{Info.bio}</div>
//             <div className="flex  gap-4"><Button onClick={open} className="!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA"> Check Resume </Button>
//             <Button component ="a" href="/Kritika Resume.pdf" download={Info.name} className="!text-primaryColor  !w-fit" size="lg" variant="outline" color="#64FFDA" rightSection={<IconDownload size={20} />}> Download </Button></div>
            
//             </div>
//             <div className="h-fit flex justify-center items-center  rounded-full mr-14 w-fit" id="photo">
//                 <NeonGradientCard className="w-[325px] h-[325px] items-center justify-center text-center">
//                 <img className="w-full h-full rounded-full " src="/KRITIKA.png" alt="profile" />
//                 </NeonGradientCard>
//             </div>
//             </div>
//             <ResumeViewer opened={opened} close={close} />
//             </div>
//             </>
//     )
// }
// export default About;
        





















import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import ResumeViewer from "./ResumeViewer";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
const About = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const btn =useMatches({
        xs:'xs',
        sm:'sm',
        md:'md',
        lg:'lg'
    })
    return (
        <>
            <div data-aos="zoom-out-up" data-aos-duration="800" className="mt-28 flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6" id="About">
                <Particles
                    className="absolute -z-20 inset-0"
                    quantity={1000}
                    ease={80}
                    vx={.1}
                    vy={.1}
                    color="#64FFDA"
                    refresh
                />
                <div className="bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-3  bs-mx:items-center">
                    <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">Hi, I am</div>
                    <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">{Info.name}</div>
                    <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">I'm a&nbsp;<span className="text-primaryColor"><Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /> </span></div>
                    <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">{Info.bio}</div>
                    <div className="xs-mx:w-[90%] flex gap-3 xs-mx:justify-between">
                        <Button onClick={open} className="focus-visible:!outline-none !text-bgColor !w-fit xs-mx:!w-[46%]" size={btn} variant="filled" color="#64FFDA">Check Resume</Button>
                        <Button component="a" href="Resume.pdf" download={Info.name} className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-[46%]" size={btn} variant="outline" color="#64FFDA" rightSection={<IconDownload size={20} />}>Download</Button>
                    </div>
                </div>
                <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
                    <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
                        <img className="w-full  h-full rounded-full " src="KRITIKA.png" alt="profile" />
                    </NeonGradientCard>
                </div>
            </div>
            <ResumeViewer opened={opened} close={close} />
        </>
    )
}
export default About;

       
    
               
    
