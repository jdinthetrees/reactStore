import React, {useState} from 'react';

import {Menu} from 'antd';

import { HomeTwoTone, UserOutlined, UserAddOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
//required to implement logout
import firebase from 'firebase';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const { SubMenu, Item } = Menu;

const Header = () => {
    const [current, setCurrent] = useState('home');

    let dispatch = useDispatch();
    let history = useHistory();

    const handleClick = (e) => {
        setCurrent(e.key);
    }
    //to log user out of app and firesbase entirely, user is not in state
    const logout = () => {
        firebase.auth().signOut();
        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        history.push("/login");
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">

        <Item key="home" icon={<HomeTwoTone />}>
            <Link to ="/">Home</Link>
        </Item>

        <Item key="register" icon={<UserAddOutlined />} className="float-right">
            <Link to ="/register">Register</Link>
        </Item>

        <Item key="login" icon={<UserOutlined />} className="float-right">
            <Link to ="/login">Sign In</Link>
        </Item>

       

        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
          
            <Item key="setting:1">Option 1</Item>
            <Item key="setting:2">Option 2</Item>
            <Item icon={<LogoutOutlined />} onClick={logout}>Log out</Item>
        </SubMenu>
        
      </Menu>
    )
}

export default Header;