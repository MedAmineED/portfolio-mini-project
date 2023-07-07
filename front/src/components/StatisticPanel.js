import React from 'react'
import Panel from './Panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StatisticPanel = ({title, icon, statistiqueData, percent}) => {
  return (
    <Panel cls={"dashbord-panel"} title={title}>
          <div  className={"flex-component"}>
              <div>
                <FontAwesomeIcon icon= {icon}  />
              </div>
              <div>
                <h4>{statistiqueData}</h4>
              </div>
          </div>
        </Panel>
  )
}

export default StatisticPanel
