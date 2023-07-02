import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock,  faUser } from '@fortawesome/free-solid-svg-icons'
import Panel from '../../components/Panel'
import Button from '../../components/Button'

library.add(faUser, faLock)



const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
                                                    admin : "",
                                                    password : ""    
                                                })

    const onChange = (e)=> {
        const update = {...loginInfo}
        update[e.target.name] = e.target.value

        setLoginInfo(update)
        console.log(loginInfo)
    }
  return (
    <div className='login-page'>
        <Panel wth={"30"} cls={"login-panel"} title={"Login Admin"}>
        <form className='form-admin-login' action='/'>
            <div className='input-container'>
                    <label htmlFor='adminLog'>Admin Name</label>
                    <input
                            onChange={(e)=> onChange(e)}  
                            className='input-login' 
                            id='adminLog' 
                            type='text' 
                            name='admin' />
            </div>
            <div className='input-container'>
                    <label 
                            htmlFor='passwordLog'>Password</label>
                    <input
                            onChange={(e)=> onChange(e)} 
                            className='input-login' 
                            id='paswordLog' 
                            type='password' 
                            name='password' />
            </div>

            <Button cls={"login-btn"} buttonValue={"Login"}/>
        </form>
        </Panel>
    </div>
  )
}

export default LoginPage
