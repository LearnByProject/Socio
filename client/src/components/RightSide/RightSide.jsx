import React ,{useState} from 'react'
import './RightSide.css'
import TrendCard from '../TrendCard/TrendCard'
import Sharemodal from '../Sharemodal/Sharemodal'
import NavIcons from '../NavIcons/NavIcons'
const RightSide = () => {
  const[modalOpened,setModalOpened] = useState(false)
  return (
    <div className="RightSide">
      <NavIcons/>
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <Sharemodal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
// {/* <div className='RightSide'>
//       <div className="navIcons">
//         <img src={Home} alt="" />
//         <UilSetting/>
//         <img src={Noti} alt=""/>
//         <img src={Comment} alt=""/>
//       </div>
//       <TrendCard/>
//       <button className="button r-button" onClick={() => setModalOpened(true)}>
//         Share
//       </button>
//       <Sharemodal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
//     </div>     */}
  )
}

export default RightSide
