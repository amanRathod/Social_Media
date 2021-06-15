/* eslint-disable prettier/prettier */
import { useState, useEffect, useContext } from 'react';
import { getPhotos, getUserByUserId} from '../services/firebase';
import UserContext from '../context/user';

export default function usePhotos() {
    const [photos, setPhotos] = useState(null);
    const {
        user: {uid: userId = ''} // uid comes from firebase and change name to userId
    } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
        // example [1,2,3] -> 2 Ranveer
        const [{ following }] = await getUserByUserId(userId); // return array
        console.log('following of user',following)

      // does the user actually follow people?
      if (following.length > 0) {
        const followedUserPhotos = await getPhotos(userId,following);
      
        // re-arrange array to be newest photos first by dateCreated
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      }
    }
    console.log('userIddUserphoto', userId);
     getTimelinePhotos()// error but not in production
  }, []);

  console.log('phtosss', photos);
  return { photos };
}
