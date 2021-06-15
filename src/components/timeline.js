import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
// we need to get the logged in user's phtos (hook)
// on loading the photos we need to use reacr skelton
// if we have photos, render them  ( create a post component)
// if the user has no photos, tell them to create some photos.

export default function Timeline() {
  return (
    <>
      <div className="container col-span-2">
        <h1>Timeline</h1>
      </div>
    </>
  );
}
