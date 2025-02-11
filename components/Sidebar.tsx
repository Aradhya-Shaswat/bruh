import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu, AiFillWechat } from 'react-icons/ai';
import { MdSettingsSuggest } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import { FaDonate } from 'react-icons/fa';

import SuggestedAccounts from './SuggestedAccounts';
import Discover from './Discover';
import Footer from './Footer';
import useAuthStore from '../store/authStore';

const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
  const { pathname } = useRouter();
  const { fetchAllUsers, allUsers }: any = useAuthStore();

  const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';
  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';

  return (
    <div>
      <div
        className='block xl:hidden m-2 ml-4 mt-3 text-xl'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 '>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/'>
              <div className={pathname === '/' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillHome />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  For You
                </span>
              </div>
            </Link>
            <Link href='/community'>
              <div className={pathname === '/community' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillWechat />
                </p>
                <span className='text-xl hidden xl:block'>
                  Community
                </span>
              </div>
            </Link>
            <Link href='https://discord.gg/NvnJ9JURR'>
              <div className={pathname === 'https://discord.gg/NvnJ9JURR' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <MdSettingsSuggest />
                </p>
                <span className='text-xl hidden xl:block'>
                  Survey!
                </span>
              </div>
            </Link>
            <Link href='https://ko-fi.com/friendbase'>
              <div className={pathname === 'https://ko-fi.com/friendbase' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <FaDonate />
                </p>
                <span className='text-xl hidden xl:block'>
                  Support Friendbase
                </span>
              </div>
            </Link>
          </div>
          
          <Discover />
          <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
