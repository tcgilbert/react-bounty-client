import { Link } from "react-router-dom";


function BountyLink(props) {

  const linkTo = `show/${props.bountyId}`

  return(
    <li>
      <Link to={linkTo}>{props.name}</Link>
    </li>
  )
}

export default BountyLink;