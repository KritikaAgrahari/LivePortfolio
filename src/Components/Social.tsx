import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconBrandHackerrank } from "@tabler/icons-react";
import { link } from "fs";
const Social=()=>{
    const socialLinks=[{link:"https://github.com/KritikaAgrahari",icon:IconBrandGithub},
        {link:"https://www.linkedin.com/in/kritika-agrahari-69352721a/",icon:IconBrandLinkedin},
        {link:"https://leetcode.com/u/Kritika_Agrahari/", icon:IconBrandLeetcode},
        {link:"https://www.hackerrank.com/profile/kritikaagrahari2",
        icon:IconBrandHackerrank}
    ];
    const socialIcons=socialLinks.map((socialLink)=>{
    return <a href={`${socialLink.link}`} target="_blank" className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
        <div data-aos="fade-up-left" data-aos-duration="800">
        <socialLink.icon className="-rotate-90" size={30} /></div>
    </a>
})

return<div className="flex md-mx:hidden  text-textColor items-center gap-10 fixed bottom-32 -left-44 rotate-90">
    {socialIcons}
    <hr className="border-[2px] w-40 rounded-full bg-textColor border-textColor"/>
</div>
}
export default Social;