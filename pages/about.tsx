// import {
//   createStyles,
//   Navbar,
//   TextInput,
//   Code,
//   UnstyledButton,
//   Badge,
//   Text,
//   Group,
//   ActionIcon,
//   Tooltip,
//   rem,
// } from '@mantine/core';
// // import {
// //   IconBulb,
// //   IconUser,
// //   IconCheckbox,
// //   IconSearch,
// //   IconPlus,
// //   IconSelector,
// // } from '@tabler/icons-react';
// // import { UserButton } from '../UserButton/UserButton';

// import Sidebar from '@/components/Sidebar';
// import Courses from '@/components/Courses';
// const useStyles = createStyles((theme) => ({
//   navbar: {
//     paddingTop: 0,
//   },

//   section: {
//     marginLeft: `calc(${theme.spacing.md} * -1)`,
//     marginRight: `calc(${theme.spacing.md} * -1)`,
//     marginBottom: theme.spacing.md,

//     '&:not(:last-of-type)': {
//       borderBottom: `${rem(1)} solid ${
//         theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
//       }`,
//     },
//   },

//   searchCode: {
//     fontWeight: 700,
//     fontSize: rem(10),
//     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
//     border: `${rem(1)} solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
//     }`,
//   },

//   mainLinks: {
//     paddingLeft: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
//     paddingRight: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
//     paddingBottom: theme.spacing.md,
//   },

//   mainLink: {
//     display: 'flex',
//     alignItems: 'center',
//     width: '100%',
//     fontSize: theme.fontSizes.xs,
//     padding: `${rem(8)} ${theme.spacing.xs}`,
//     borderRadius: theme.radius.sm,
//     fontWeight: 500,
//     color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

//     '&:hover': {
//       backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
//       color: theme.colorScheme === 'dark' ? theme.white : theme.black,
//     },
//   },

//   mainLinkInner: {
//     display: 'flex',
//     alignItems: 'center',
//     flex: 1,
//   },

//   mainLinkIcon: {
//     marginRight: theme.spacing.sm,
//     color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
//   },

//   mainLinkBadge: {
//     padding: 0,
//     width: rem(20),
//     height: rem(20),
//     pointerEvents: 'none',
//   },

//   collections: {
//     paddingLeft: `calc(${theme.spacing.md} - ${rem(6)})`,
//     paddingRight: `calc(${theme.spacing.md} - ${rem(6)})`,
//     paddingBottom: theme.spacing.md,
//   },

//   collectionsHeader: {
//     paddingLeft: `calc(${theme.spacing.md} + ${rem(2)})`,
//     paddingRight: theme.spacing.md,
//     marginBottom: rem(5),
//   },

//   collectionLink: {
//     display: 'block',
//     padding: `${rem(8)} ${theme.spacing.xs}`,
//     textDecoration: 'none',
//     borderRadius: theme.radius.sm,
//     fontSize: theme.fontSizes.xs,
//     color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
//     lineHeight: 1,
//     fontWeight: 500,

//     '&:hover': {
//       backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
//       color: theme.colorScheme === 'dark' ? theme.white : theme.black,
//     },
//   },
// }));

// const links = [
//   {  label: 'Activity', notifications: 3 },
//   { label: 'Tasks', notifications: 4 },
//   {  label: 'Contacts' },
// ];

// const collections = [
//   { emoji: '👍', label: 'Sales',component:<Sidebar/> },
//   { emoji: '🚚', label: 'Deliveries',component:<Courses/> },
//   { emoji: '💸', label: 'Discounts' },
//   { emoji: '💰', label: 'Profits' },
//   { emoji: '✨', label: 'Reports' },
//   { emoji: '🛒', label: 'Orders' },
//   { emoji: '📅', label: 'Events' },
//   { emoji: '🙈', label: 'Debts' },
//   { emoji: '💁‍♀️', label: 'Customers' },
// ];

// export function NavbarSearch() {
//   const { classes } = useStyles();

//   const mainLinks = links.map((link) => (
//     <UnstyledButton key={link.label} className={classes.mainLink}>
//       <div className={classes.mainLinkInner}>
//         {/* <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} /> */}
//         <span>{link.label}</span>
//       </div>
//       {link.notifications && (
//         <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
//           {link.notifications}
//         </Badge>
//       )}
//     </UnstyledButton>
//   ));

//   const collectionLinks = collections.map((collection) => (
//     <a
//       href="/"
//       onClick={(event) => event.preventDefault()}
//       key={collection.label}
//       className={classes.collectionLink}
//     >
//       <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
//       {collection.label}
//     </a>
//   ));

//   return (
//     <Navbar height={700} width={{ sm: 200 }} p="md" className={classes.navbar}>
//       <Navbar.Section className={classes.section}>
 
//       </Navbar.Section>

//       <TextInput
//         placeholder="Search"
//         size="xs"
//         // icon={<IconSearch size="0.8rem" stroke={1.5} />}
//         rightSectionWidth={70}
//         rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
//         styles={{ rightSection: { pointerEvents: 'none' } }}
//         mb="sm"
//       />

//       <Navbar.Section className={classes.section}>
//         <div className={classes.mainLinks}>{mainLinks}</div>
//       </Navbar.Section>

//       <Navbar.Section className={classes.section}>
//         <Group className={classes.collectionsHeader} position="apart">
//           <Text size="xs" weight={500} color="dimmed">
//             Collections
//           </Text>
//           <Tooltip label="Create collection" withArrow position="right">
//             <ActionIcon variant="default" size={18}>
//               {/* <IconPlus size="0.8rem" stroke={1.5} /> */}
//             </ActionIcon>
//           </Tooltip>
//         </Group>
//         <div className={classes.collections}>{collectionLinks}</div>
//       </Navbar.Section>
//     </Navbar>
//   );
// }

// import React, { useState } from 'react'

// const about = () => {
//   const [show,setOpen] = useState(true)
//   return (
//     <div className='bg-white text-black flex gap-4'>
//    <NavbarSearch/>
//       <div className='w-full bg-gray-500 p-4' >
//         <h2>About</h2>
//         <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facere aut facilis culpa magnam est, quam quos mollitia consequatur maxime labore autem accusantium ad repellat! Rem blanditiis natus perspiciatis porro!
//         Error est nesciunt qui maiores magnam itaque? Aperiam assumenda quos earum atque doloremque magnam blanditiis repellendus tempora officia. Illum, sequi reprehenderit unde nulla inventore modi nam esse labore harum veritatis?
//         Neque, tempora, tenetur et consequatur voluptatibus, accusantium corrupti ex quasi rem laborum reprehenderit consectetur. Aspernatur quaerat amet molestiae optio, tempore, veritatis et sed quasi eligendi voluptates ipsum ex eaque. Vero!
//         Exercitationem quos optio quia aut! Nesciunt dignissimos, iusto aspernatur quam dolore porro voluptatum ut doloremque praesentium quia officia accusantium beatae omnis sunt impedit reprehenderit voluptate eius, odit fugiat ipsam minus!</p>
//       </div>
//     </div>
//   )
// }

// export default about




// const Dashboard = () => {
//   return <div>Dashboard</div>;
// };

// const Settings = () => {
//   return <div>Settings</div>;
// };

// const Main = ({ active }) => {
//   switch (active) {
//     case 'dashboard':
//       return <Dashboard />;
//     case 'settings':
//       return <Settings />;
//     default:
//       return null;
//   }
// };

// const App = () => {
//   return (
//     <div>
//       <Sidebar />
//       <Main active="dashboard" />
//     </div>
//   );
// };

// export default App;

import React from 'react'
import {Sidebar} from "@/components/Sidebar";
import Main from '@/components/Sidebar';


const about = () => {
  return (
    <div>

      <Sidebar/>
      <Main active="Home"/>
    </div>
  )
}

export default about