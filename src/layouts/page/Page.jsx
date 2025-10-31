import React, {useEffect} from 'react';
import PageHeader from '@/pages/pageHeader/PageHeader.jsx';
import PageContent from '@/layouts/page/PageContent.jsx';
import {useLocation} from 'react-router-dom';
import {cn} from "@/lib/utils/index.jsx";


const Page = ({ children, className }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={cn('flex flex-col h-full min-h-[100dvh] grow ')}>
      <div className={cn('flex flex-col h-full grow w-full ', className)}>
        {children}
      </div>
    </div>
  );
};


Page.Header = PageHeader;
Page.Content = PageContent;


export default Page;
