import React from 'react';
import {
  BellIcon,
  CheckBadgeIcon,
  EllipsisHorizontalIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  ListBulletIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { useRecoilState } from 'recoil';
import { activeNavLinkAtom } from '@/app/store';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

function LeftSection() {
  const [activeNavLink, setActiveNavLink] = useRecoilState(activeNavLinkAtom);
  const router = useRouter();

  const handleNavLinkClick = (navlink) => {
    setActiveNavLink(navlink.title);
    if (activeNavLink === 'Home') {
      router.push('/');
    }
  };

  const navLinks = [
    {
      id: 0,
      title: 'Home',
      link: '/home',
      icon: <HomeIcon className="h-8 w-8 stroke-white" />,
    },
    {
      id: 1,
      title: 'Explore',
      link: '/explore',
      icon: <HashtagIcon className="h-8 w-8 stroke-white" />,
    },
    {
      id: 2,
      title: 'Notifications',
      link: '/notifications',
      icon: <BellIcon className="h-8 w-8 stroke-white" />,
    },
    {
      id: 3,
      title: 'Messages',
      link: '/messages',
      icon: <EnvelopeIcon className="h-8 w-8 stroke-white" />,
    },
    {
      id: 4,
      title: 'Lists',
      link: '/lists',
      icon: <ListBulletIcon className="h-8 w-8 stroke-white" />,
    },
    {
      id: 5,
      title: 'Communities',
      link: '/communities',
      icon: <UsersIcon className="h-8 w-8 stroke-white" />,
    },
    {
      id: 6,
      title: 'Verified Orgs',
      link: '/verified-Orgs',
      icon: <CheckBadgeIcon className="h-8 w-8 stroke-white" />,
    },
    {
      id: 7,
      title: 'Profile',
      link: '/profile',
      icon: <UserIcon className="h-8 w-8 stroke-white" />,
    },
    {
      id: 8,
      title: 'more',
      link: '/more',
      icon: <EllipsisHorizontalIcon className="h-8 w-8 stroke-white" />,
    },
  ];

  return (
    <div
      className="md:col-span-1 h-full flex 
flex-col items-start justify-start pt-2 md:px-10"
    >
      <span className="px-4 mb-4">
        <svg
          className="h-8 w-8 stroke-white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      </span>
      {navLinks.map((navlink) => (
        <span
          key={navlink.id}
          onClick={() => handleNavLinkClick(navlink)}
          className={`flex space-x-4 items-start justify-center text-white hover:bg-[#0f0f0f] rounded-full px-4 py-2 cursor-pointer ${
            activeNavLink === navlink.title ? 'font-bold' : 'font-normal'
          }`}
        >
          <>{navlink.icon}</>
          <p className="text-xl hidden md:flex ">{navlink.title}</p>
        </span>
      ))}
      <span className="w-full items-center justify-center md:flex mt-4 hidden">
        <button className="post-button w-full" onClick={() => signOut()}>
          Post
        </button>
      </span>
    </div>
  );
}

export default LeftSection;
