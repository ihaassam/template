import React ,{ useState, useMemo} from 'react'
import { Layout as SideBar, Menu, Dropdown, Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined } from '@ant-design/icons';
import { useLocation, Link } from 'react-router-dom';
import MenuItems from '../SidebarItems';
import useWindowWidth from '../../HOC/useWindowsWidth';
import { ContentLayout } from '../../Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Utilities/index';


import './layout.css';


const { Header, Content, Sider } = SideBar;



const Layout = () => {
  const { activeTab } = useSelector((state) => state.UIState);
  const [currTab, setCurrTab] = useState(activeTab);

    const currWidth = useWindowWidth();
    const location = useLocation();
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(currWidth <= 960);

    const name = 'Admin';

    const toggle = () => {
        setCollapsed(!collapsed);
      };

      useMemo(() => {
        dispatch({ type: 'SET_ACTIVE_TAB', payload: location.pathname });
        setCurrTab(activeTab);
      }, [location, dispatch, activeTab]);

      const menu = (
        <Menu>
          <Menu.Item key="sign-out" onClick={logout} icon={<LogoutOutlined />}>
            Sign Out
          </Menu.Item>
        </Menu>
      );

    return (
        <SideBar className="h-100vh">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-container">
          <Link to="/home">
            <h1 className="sidebar-heading">{!collapsed ? 'Home' : 'Home'}</h1>
          </Link>
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={currTab} >
          {MenuItems.map((item) => {
            return (
              <Menu.Item key={item.path} icon={item.icon}>
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <SideBar className="p-0">
        <Header className="bg-white p-0">
          <div className="flex-between header-container">
            <div>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </div>
            <div className="flex-center">
              {currWidth >= 960 && (
                <span className="light-span">
                  Hello, <strong className="user-name">{name}</strong>
                </span>
              )}
              <Dropdown overlay={menu} arrow>
                <Avatar className="avatar-extra" size="large">
                  {name.charAt(0).toUpperCase()}
                </Avatar>
              </Dropdown>
            </div>
          </div>
        </Header>
        <div className="content-wrapper">
          <Content className="bg-white context-box">
            <ContentLayout />
          </Content>
        </div>
      </SideBar>
    </SideBar>
    )
}

export default Layout
