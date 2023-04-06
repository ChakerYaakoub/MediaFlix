import React from 'react';
import { Link } from 'react-router-dom';

import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';

//removed package : 

// * @syncfusion/ej2    
// * @syncfusion/ej2-react-calendars  
// * @syncfusion/ej2-react-charts   
// * @syncfusion/ej2-react-dropdowns 
// * @syncfusion/ej2-react-inputs   
// * @syncfusion/ej2-react-kanban 
// * @syncfusion/ej2-react-richtexteditor 
// * @syncfusion/ej2-react-schedule 

//npm prune


//chaker 





import { TbLayoutDashboard } from 'react-icons/tb';
import { ImFilm } from 'react-icons/im';
import { FaFilm } from 'react-icons/fa';
import { VscBroadcast } from 'react-icons/vsc';
import { MdOutlineReviews } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { FiPieChart } from 'react-icons/fi';
import { BsBarChartLine } from 'react-icons/bs';
import { Button } from '../../components';

// import { useStateContext } from '../../contexts/ContextProvider';
// const {currentColor}=useStateContext(); 

//chaker

//fc for films 
export const gridMediaImage = (props) => (
  <div>
    <img
      className="rounded-xl h-24 w-24 md:ml-3"
      // src= {process.env.PUBLIC_URL + `C:\\Users\\Chaker\\Desktop\\test auth user admin\\${props.image}`}
      src={`http://localhost:3000/${props.image}`}
      // /uploads/movies/title/image.png
      // <img src=`http://localhost:3000/${data.image}` />
     
    
      alt="item"
      // style={{ width: "100%", height: "100%" }}
    />
  </div>
);

export const gridEditMedia = (props) => (

  <Link to={`/Films/EditFilm/${props._id}`}>

    <button
      type="button"
      style={{ background: 'rgb(3, 201, 215)' }}
      
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    // onClick={() =>window.location.href =`EditFilm/${props._id}`}
    >
      Edit
    </button>
    {/* <Button
      color='white'
      bgColor={currentColor}
      text="Edit film"
      borderRadius="10px"
      size="md"
   

    /> */}
  </Link>

);




// for Notification 
export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

//for sidebare
export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'DashHome',
        icon: <TbLayoutDashboard />,
      },
    ],
  },

  {
    title: 'Media Tools',
    links: [
      {
        name: 'Films',
        icon: <ImFilm />,
      },
      {
        name: 'Series',
        icon: <FaFilm />,
      }
    ],
  },

  {
    title: 'Cast Tools',
    links: [
      {
        name: 'Casts',
        icon: <VscBroadcast />,
      }
    ],
  },

  {
    title: 'Users Tools',
    links: [
      {
        name: 'Users',
        icon: <HiOutlineUsers />,
      }
    ],
  },

  {
    title: 'Reviews Tools',
    links: [
      {
        name: 'Reviews',
        icon: <MdOutlineReviews />,
      }
    ],
  },

  {
    title: 'Charts And Graphs',
    links: [
      {
        name: 'Bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'Pie',
        icon: <FiPieChart />,
      },
      {
        name: 'Color-Mapping',
        icon: <BsBarChartLine />,
      }

    ],
  },
];



////////////////////////////////////themeColors


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];


/////////////////////////////////data for films 

// not used 
export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];
//data 
// img title type rating  views edit 
export const MediaData = [
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 3,
    views: 10,
    createdAt: '20/110/2022',
    image: product1,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 7,
    views: 10,
    createdAt: '20/110/2022',
    image: product2,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 5,
    views: 10,
    createdAt: '20/110/2022',
    image: product3,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 4,
    views: 10,
    createdAt: '20/110/2022',
    image: product4,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 2,
    views: 10,
    createdAt: '20/110/2022',
    image: product5,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 1,
    views: 10,
    createdAt: '20/110/2022',
    image: product6,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 10,
    views: 10,
    createdAt: '20/110/2022',
    image: product7,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 7,
    views: 10,
    createdAt: '20/110/2022',
    image: product2,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 8,
    views: 10,
    createdAt: '20/110/2022',
    image: product4,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 9,
    views: 10,
    createdAt: '20/110/2022',
    image: product6,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 10,
    views: 10,
    createdAt: '20/110/2022',
    image: product2,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 7,
    views: 10,
    createdAt: '20/110/2022',
    image: product5,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 7,
    views: 10,
    createdAt: '20/110/2022',
    image: product4,

  },
  {
    _id: 10248,
    title: 'the last of us',
    type: 'film',
    countRate: 7,
    views: 10,
    createdAt: '20/110/2022',
    image: product7,

  },

];

//gride table 
export const MediaGrid = [
  {
    headerText: 'Image',
    template: gridMediaImage,
    textAlign: 'Center',
    width: '120',
  },

  {
    field: 'title',
    headerText: 'Title',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'type',
    headerText: 'Type',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '80',
  },
  {
    field: 'countRate',
    headerText: 'Rating',
    width: '100',
    textAlign: 'Center',
  },
  ,
  {
    field: 'views',
    headerText: 'Views',
    width: '100',
    textAlign: 'Center',
  },
  ,
  {
    field: 'createdAt',
    headerText: 'CreatedAt',
    width: '100',
    textAlign: 'Center',
  },

  {
    headerText: 'Edit',
    template: gridEditMedia,
    field: 'edit',
    textAlign: 'Center',
    width: '80',
  }
];

  // img title type rating  views edit 

