import { Icon } from './lib/chakra';
import {
  MdFileCopy,
  MdHome,
  MdLock,
  MdLayers,
  MdAutoAwesome,
  MdOutlineManageAccounts, MdAssistant,
  MdCreate,
  MdAutoFixHigh,
  MdAccessTime,
  MdDateRange,
  MdEventNote,
  MdEvent,
  MdPerson
} from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { LuHistory } from 'react-icons/lu';
import { RoundedChart } from '@/components/icons/Icons';

// Auth Imports
import { IRoute } from './types/navigation';
import { RiAppsLine } from 'react-icons/ri';

const routes: IRoute[] = [
  {
    name: 'New Chat',
    path: '/chat',
    icon: (
      <Icon as={MdAutoFixHigh} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },
  {
    name: 'All History',
    path: '/history',
    icon: (
      <Icon as={LuHistory} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },

  {
    name: 'Library',
    path: '/all-templates',
    icon: <Icon as={RiAppsLine} width="20px" height="20px" color="inherit" />,
    collapse: false,
    rightElement: true,
  },

  {
    name: 'Today',
    path: '/history',
    icon: (
      <Icon as={MdAccessTime} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },

  {
    name: 'Yesterday',
    path: '/history',
    icon: (
      <Icon as={MdDateRange} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },

  {
    name: 'Last 7 Days',
    path: '/history',
    icon: (
      <Icon as={MdEventNote} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },

  {
    name: 'Last 30 Days',
    path: '/history',
    icon: (
      <Icon as={MdEvent} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },

  {
    name: 'Credits',
    path: '/usage',
    icon: (
      <Icon as={RoundedChart} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },

  {
    name: 'Profile',
    path: '/settings',
    icon: (
      <Icon as={MdPerson} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },

  {
    name: 'Logout',
    path: '/history',
    icon: (
      <Icon as={MdEvent} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },

  {
    name: 'Profile Settings',
    path: '/settings',
    icon: (
      <Icon
        as={MdOutlineManageAccounts}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    invisible: true,
    collapse: false,
  },
  {
    name: 'History',
    path: '/history',
    icon: <Icon as={LuHistory} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Usage',
    path: '/usage',
    icon: <Icon as={RoundedChart} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'My plan',
    path: '/my-plan',
    icon: <Icon as={RoundedChart} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  // -------------- Prompt Pages --------------
  {
    name: 'Essay Generator',
    path: '/essay',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Content Simplifier',
    path: '/simplifier',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Product Description',
    path: '/product-description',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Email Enhancer',
    path: '/email-enhancer',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'LinkedIn Message',
    path: '/linkedin-message',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Instagram Caption',
    path: '/caption',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'FAQs Content',
    path: '/faq',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Product Name Generator',
    path: '/name-generator',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'SEO Keywords',
    path: '/seo-keywords',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Review Responder',
    path: '/review-responder',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Business Idea Generator',
    path: '/business-generator',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Article Generator',
    path: '/article',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Plagiarism Checker',
    path: '/plagiarism-checker',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Hashtags Generator',
    path: '/hashtags-generator',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Pet Name Generator',
    path: '/pet-name-generator',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Translator',
    path: '/translator',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Domain Name Generator',
    path: '/domain-name-generator',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Bootstrap to Tailwind Converter',
    path: '/bootstrap-to-tailwind-converter',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
];

export default routes;
