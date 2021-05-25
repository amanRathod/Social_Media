/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';
import Header from '../components/header';


export default function Dashboard() {

  useEffect(() => {
    document.title = 'Social Media';
  }, []);

    return (
      <div className="bg-gray-background mx-auto max-w-screen-lg">
        <Header />
        <div className="flex flex-row w-full">
          <Timeline className="3/5"/>
          <Sidebar className="2/5"/>
        </div>
      </div>
    )
  }