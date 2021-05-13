import { useSelector, useDispatch } from 'react-redux';

import {BurguerStyled} from './UI';
import { setSidebar } from '../redux/sidebar/sidebarActions';

const Burguer = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector(state => state.sidebar);

    return(
      <BurguerStyled  onClick={() => dispatch(setSidebar(sidebar))} open={sidebar}>
        <span />
        <span />
        <span />
      </BurguerStyled>
  )      
}

export default Burguer;