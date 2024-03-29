/* eslint-disable prettier/prettier */
// import {memo} from 'react'; // to optimize
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
// import { DEFAULT_IMAGE_PATH } from '../../constants/paths';

const User = ({ username, fullName }) => !username || !fullName ? (
    
    // console.log('fullname', fullName),
    // console.log('username', username),
    <Skeleton height={61} count={1}/>
   
): (
    <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-6 items-center">
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={( ) => {
            // e.target.src = DEFAULT_IMAGE_PATH;
          }}
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  
)
// User.whyDidYouRender = true;
export default User;

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string
};



