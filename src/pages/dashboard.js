/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import Sidebar from '../components/sidebar/index';
import Timeline from '../components/timeline';
import Header from '../components/header';


export default function Dashboard() {

  useEffect(() => {
    document.title = 'Social Media';
  }, []);

    return (
      // <div>Dashboard</div>
      <div className="bg-gray-background ">
       
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <Timeline />
          <Sidebar />
        </div>
      </div>
    )
  }