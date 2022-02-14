import { useParams } from 'react-router-dom';
import {Route, Routes, Link, NavLink} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    background: 'skyblue',
    color: 'white'
  }
  return (
    <div>
      <h3>사용자 목록: </h3>
      <ul>
        <li>
          <Link to={"/profiles/velopert"}>velopert</Link>
        </li>
        <li>
          <Link to={"/profiles/gildong"}>gildong</Link>
        </li>
      </ul>

      <Routes>
        <Route path={"/profiles"} render={()=> <div>사용자를 선택해주세요.</div>} />
        <Route path={"/profiles/:username"} element={<Profile />} />
      </Routes>

    </div>
  )
}

export default Profiles;