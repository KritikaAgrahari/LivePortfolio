// import { useDisclosure } from '@mantine/hooks';
// import { Drawer, Button, Burger} from '@mantine/core';
// // import { IconX } from '@tabler/icons-react';
// import { IconHexagonLetterK, IconX } from '@tabler/icons-react';
// import { navLinks } from './Header';
// // import { navLinks } from './Header';

// const SideBar=() =>{
//   const [opened, { toggle}] = useDisclosure(false);
//   return (
//     <>


//     <Drawer.Root className='md:hidden !-z-10' position='right' opened={opened} onClose={toggle} size="50vw">
//       <Drawer.Overlay  className='!-z-0' style={{ backgroundOpacity: 0.5, blur:4}}/>
//       <Drawer.Content  className='!-z-0' bg="#0A192F">
        
//         <Drawer.Body  className='mt-20 flex flex-col gap-8' bg="#0A192F">
//          {navLinks(true)} </Drawer.Body>
//       </Drawer.Content>
//     </Drawer.Root>
//       <Burger className='md:!hidden !z-10' size="lg" color='#64FFDA' opened={opened} onClick={toggle} />

//     </>
//   );
// }
// export default SideBar;

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger, useMatches } from '@mantine/core';
import { navLinks } from './Header';

const SideBar=()=> {
  const [opened, { toggle }] = useDisclosure(false);
  const size=useMatches({
   xs:'md',
   sm:'lg'
});

  return (
    <>
      <Drawer.Root  className='bs:hidden !-z-10'  position='right' opened={opened}   onClose={toggle} size="50vw" >
        <Drawer.Overlay className='!-z-0 !backdrop-opacity-85 blur-sm' />
        <Drawer.Content className='!-z-0' bg="#112240">
          <Drawer.Body className='mt-20 xs:mt-24  flex flex-col gap-5' bg="#112240">
            {navLinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className='bs:!hidden !z-50 relative' size={size} color='#64FFDA' opened={opened} onClick={toggle}  />
    </>
  );
}
export default SideBar;