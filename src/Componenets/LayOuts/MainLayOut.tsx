import { Layout, Menu, MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "a1",
    label: "Dashboard",
  },
  {
    key: "a2",
    label: "Profile",
  },
  {
    key: "a3",
    label: "User Management",
    children: [
      {
        key: "a21",
        label: "Create Admin",
      },
      {
        key: "a22",
        label: "Create User",
      },
    ],
  },
];

const MainLayOut = () => {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div
            style={{
              color: "white",
              textAlign: "center",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ height: "20px" }}>PH University</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <h1>The main content should go here</h1>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayOut;
