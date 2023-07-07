import React from 'react'
import Row from '../components/Row'
import Container from '../components/Container'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faNewspaper, faUsers, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../components/NavBar'
import OpenContactModal from '../contexts/OpenContactModal'
import StatisticPanel from '../components/StatisticPanel'

library.add(faUsers, faNewspaper, faComment, faHeart)


const links = [
  {
    link : "/dashboard",
    itemName : "Dashboard"
  },
  {
    link : "/dashboard/blogs",
    itemName : "Blogs"
  },
  {
    link : "/dashboard/projects",
    itemName : "Projects"
  },
  {
    link : "/",
    itemName : "Portfolio"
  },
]



const DashboardHome = () => {
  return (
    <div className='dashboard-home'>
    <OpenContactModal>
      <NavBar navLinks={links} profile={true}/>
    </OpenContactModal>

    <Container>
    <Row>
        <StatisticPanel title={"visitors"} icon={"fa-solid fa-users"} statistiqueData={234} />
        <StatisticPanel title={"Blogs"} icon={"fa-solid fa-newspaper"} statistiqueData={124} />
    </Row> 
    <Row>
        <StatisticPanel title={"Comments"} icon={"fa-solid fa-comment"} statistiqueData={64} />
        <StatisticPanel title={"Likes"} icon={"fa-solid fa-heart"} statistiqueData={140} />
    </Row> 
    </Container>
    </div>
  )
}

export default DashboardHome
