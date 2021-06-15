/* eslint-disable prettier/prettier */
import React, { useContext} from 'react';
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from '../context/logged-in-user';
import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function Timeline() {
  
  // we need to logged in users photos
  const {photos} = usePhotos();
  
// on loading the photos we need to use reacr skelton
// if we have photos, render them  ( create a post component)
// if the user has no photos, tell them to create some photos.

  return (
    <div className="container col-span-2">
    {!photos ? (
      <Skeleton count={4} width={640} height={500} className="mb-5" />
    ) : (
      photos.map((content) => <Post key={content.docId} content={content} />) // <Post key={content.docId} content={content}
    )}
  </div>
);
}
