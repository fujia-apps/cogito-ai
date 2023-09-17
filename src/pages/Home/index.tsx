import { Link } from 'react-router-dom';

export const HomePage = () => {
  return <div>
    Home

    <Link to="/paddle">
      paddle
    </Link>
    <Link to="/settings">
      settings
    </Link>
  </div>
};