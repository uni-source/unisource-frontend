// import React from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from '@mui/material';
// import Image from 'next/image';
// import { Left } from 'react-bootstrap/lib/Media';

// const badges = [
//   {
//     level: 'LEVEL 1',
//     name: 'Bronze Contributor',
//     description: 'Issues when Student reach score more than 20 points',
//     image: '/assets/badges/bronze.png', 
//   },
//   {
//     level: 'LEVEL 2',
//     name: 'Silver Contributor',
//     description: 'Issues when Student reach score more than 50 points',
//     image: '/assets/badges/silver.png',
//   },
//   {
//     level: 'LEVEL 3',
//     name: 'Gold Contributor',
//     description: 'Issues when Student reach score more than 70 points',
//     image: '/assets/badges/gold.png',
//   },
//   {
//     level: 'LEVEL 4',
//     name: 'Platinum Contributor',
//     description: 'Issues when Student reach score more than 90 points',
//     image: '/assets/badges/platinum.png',
//   },
//   {
//     level: 'LEVEL 5',
//     name: 'Diamond Contributor',
//     description: 'Issues when Student reach score more than 150 points',
//     image: '/assets/badges/diamond.png',
//   },
// ];

// const BadgeTable = () => {
//   return (
//     <TableContainer sx={{ borderRadius: 3, p: 2, marginTop: 5, backgroundColor: 'var(--light-grey)', paddingLeft: 10, paddingRight:10, marginLeft:50}}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell><strong>Badge</strong></TableCell>
//             <TableCell><strong>Badge Name</strong></TableCell>
//             <TableCell><strong>Badge description</strong></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {badges.map((badge, index) => (
//             <TableRow key={index}>
//               <TableCell>
//                 <Image src={badge.image} alt={`${badge.level} badge`} width={80} height={80} />
//               </TableCell>
//               <TableCell>{badge.name}</TableCell>
//               <TableCell>{badge.description}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default BadgeTable;

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Image from 'next/image';

const badges = [
  {
    level: 'LEVEL 1',
    name: 'Bronze Contributor',
    description: 'Issues when Student reach score more than 20 points',
    image: '/assets/badges/bronze.png', 
  },
  {
    level: 'LEVEL 2',
    name: 'Silver Contributor',
    description: 'Issues when Student reach score more than 50 points',
    image: '/assets/badges/silver.png',
  },
  {
    level: 'LEVEL 3',
    name: 'Gold Contributor',
    description: 'Issues when Student reach score more than 70 points',
    image: '/assets/badges/gold.png',
  },
  {
    level: 'LEVEL 4',
    name: 'Platinum Contributor',
    description: 'Issues when Student reach score more than 90 points',
    image: '/assets/badges/platinum.png',
  },
  {
    level: 'LEVEL 5',
    name: 'Diamond Contributor',
    description: 'Issues when Student reach score more than 150 points',
    image: '/assets/badges/diamond.png',
  },
];

const BadgeTable = () => {
  return (
    <TableContainer 
      component={Paper}
      sx={{ 
        borderRadius: 3,
        p: 2,
        marginTop: 5,
        backgroundColor: 'var(--light-grey)',
        paddingLeft: 5, 
        paddingRight: 5,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Badge</strong></TableCell>
            <TableCell><strong>Badge Name</strong></TableCell>
            <TableCell><strong>Badge description</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {badges.map((badge, index) => (
            <TableRow key={index}>
              <TableCell>
                <Image src={badge.image} alt={`${badge.level} badge`} width={80} height={80} />
              </TableCell>
              <TableCell>{badge.name}</TableCell>
              <TableCell>{badge.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BadgeTable;
