"use client";
import {
  ToTopOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useNiamContext } from "../global/contexts/NiamContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "../../assets/styles/main.css";
import "../../assets/styles/responsive.css";
import axios from "axios";

// Images

import ava1 from "../../assets/images/logo-shopify.svg";
import ava2 from "../../assets/images/logo-atlassian.svg";
import ava3 from "../../assets/images/logo-slack.svg";
import ava4 from "../../assets/images/logo-spotify.svg";
import ava5 from "../../assets/images/logo-jira.svg";
import ava6 from "../../assets/images/logo-invision.svg";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";
import card from "../../assets/images/info-card-1.jpg";
import face from "../../assets/images/face-1.jpg";
import face2 from "../../assets/images/face-2.jpg";
import face3 from "../../assets/images/face-3.jpg";
import face4 from "../../assets/images/face-4.jpg";
import face5 from "../../assets/images/face-5.jpeg";
import face6 from "../../assets/images/face-6.jpeg";
import pencil from "../../assets/images/pencil.svg";

import {
  Card,
  Col,
  Row,
  Form,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
  Avatar,
  Table,
  Select,
} from "antd";

import Paragraph from "antd/lib/typography/Paragraph";
import Link from "next/link";
import Image from "next/image";
import TextArea from "antd/es/input/TextArea";

const { Title, Text } = Typography;
const onChange = (e) => console.log(`radio checked:${e.target.value}`);

const count = [
  {
    className: "grantedAccess",
    title: "Granted Access",
    number: 32,
  },
  {
    className: "accessApproved",
    title: "Access Approved",
    number: 26,
  },
  {
    // today: "Today’s Sales",
    // title: "$53,000",
    // persent: "+30%",
    // icon: dollor,
    // bnb: "bnb2",
    className: "pendingApproval",
    title: "Pending Approval",
    number: 11,
  },
  {
    className: "waitingApproval",
    title: "Waiting Approval",
    number: 19,
  },
];
const list = [
  {
    img: ava1,
    Title: "Shopify",
    bud: "$14,000",
    progress: <Progress percent={60} size="small" />,
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <Image className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <Image className="tootip-img" src={team2} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Alexander Smith">
          <Image className="tootip-img" src={team3} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Jessica Doe">
          <Image className="tootip-img" src={team4} alt="" />
        </Tooltip>
      </div>
    ),
    roles: (
      <>
        <div className="author-info">
          <Title level={5}>Marketing Manager</Title>
        </div>
      </>
    ),
    rights: (
      <>
        <div className="author-info">
          <Title level={5}>Access Approval</Title>
          <Title level={5}>Vacation Approval</Title>
        </div>
      </>
    ),
    accessSince: (
      <>
        <div className="author-info">
          <Title level={5}>02/01/2015</Title>
        </div>
      </>
    ),
    ticketNo: (
      <>
        <div className="author-info">
          <Title level={5}>7643f326rtdg23</Title>
        </div>
      </>
    ),
  },
  {
    img: ava2,
    Title: "Jira",
    bud: "$3,000",
    progress: <Progress percent={10} size="small" />,
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <Image className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <Image className="tootip-img" src={team2} alt="" />
        </Tooltip>
      </div>
    ),
    roles: (
      <>
        <div className="author-info">
          <Title level={5}>App Owner</Title>
        </div>
      </>
    ),
    rights: (
      <>
        <div className="author-info">
          <Title level={5}>Access Approval</Title>
          <Title level={5}>Admin Access</Title>
        </div>
      </>
    ),
    accessSince: (
      <>
        <div className="author-info">
          <Title level={5}>05/11/2022</Title>
        </div>
      </>
    ),
    ticketNo: (
      <>
        <div className="author-info">
          <Title level={5}>265fd2f8qdq</Title>
        </div>
      </>
    ),
  },
  {
    img: ava3,
    Title: "Slack",
    bud: "Not Set",
    progress: <Progress percent={100} size="small" status="active" />,
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <Image className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <Image className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Alexander Smith">
          <Image className="tootip-img" src={team3} alt="" />
        </Tooltip>
      </div>
    ),
    roles: (
      <>
        <div className="author-info">
          <Title level={5}>App Manager</Title>
        </div>
      </>
    ),
    rights: (
      <>
        <div className="author-info">
          <Title level={5}>Provisioning Access</Title>
          <Title level={5}>Deprovisioning Access</Title>
        </div>
      </>
    ),
    accessSince: (
      <>
        <div className="author-info">
          <Title level={5}>17/05/2022</Title>
        </div>
      </>
    ),
    ticketNo: (
      <>
        <div className="author-info">
          <Title level={5}>8a7ffsf798632</Title>
        </div>
      </>
    ),
  },
  {
    img: ava4,
    Title: "OS",
    bud: "$20,600",
    progress: <Progress percent={100} size="small" status="active" />,
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <Image className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <Image className="tootip-img" src={team2} alt="" />
        </Tooltip>
      </div>
    ),
    roles: (
      <>
        <div className="author-info">
          <Title level={5}>Marketing Manager</Title>
        </div>
      </>
    ),
    rights: (
      <>
        <div className="author-info">
          <Title level={5}>Access Approval</Title>
          <Title level={5}>Vacation Approval</Title>
        </div>
      </>
    ),
    accessSince: (
      <>
        <div className="author-info">
          <Title level={5}>22/05/2022</Title>
        </div>
      </>
    ),
    ticketNo: (
      <>
        <div className="author-info">
          <Title level={5}>987df63veevz</Title>
        </div>
      </>
    ),
  },
  {
    img: ava5,
    Title: "HRM",
    bud: "$4,000",
    progress: <Progress percent={80} size="small" />,
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <Image className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <Image className="tootip-img" src={team2} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Alexander Smith">
          <Image className="tootip-img" src={team3} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Jessica Doe">
          <Image className="tootip-img" src={team4} alt="" />
        </Tooltip>
      </div>
    ),
    roles: (
      <>
        <div className="author-info">
          <Title level={5}>App Owner</Title>
        </div>
      </>
    ),
    rights: (
      <>
        <div className="author-info">
          <Title level={5}>Access Approval</Title>
          <Title level={5}>Admin Access</Title>
        </div>
      </>
    ),
    accessSince: (
      <>
        <div className="author-info">
          <Title level={5}>11/04/2021</Title>
        </div>
      </>
    ),
    ticketNo: (
      <>
        <div className="author-info">
          <Title level={5}>973bqs3eeaq</Title>
        </div>
      </>
    ),
  },

  {
    img: ava6,
    Title: "ERP",
    bud: "$2,000",
    progress: (
      <Progress
        percent={100}
        size="small"
        status="exception"
        format={() => "Cancel"}
      />
    ),
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <Image className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <Image className="tootip-img" src={team2} alt="" />
        </Tooltip>
      </div>
    ),
    roles: (
      <>
        <div className="author-info">
          <Title level={5}>App Manager</Title>
        </div>
      </>
    ),
    rights: (
      <>
        <div className="author-info">
          <Title level={5}>Provisioning Access</Title>
          <Title level={5}>Deprovisioning Access</Title>
        </div>
      </>
    ),
    accessSince: (
      <>
        <div className="author-info">
          <Title level={5}>11/05/2016</Title>
        </div>
      </>
    ),
    ticketNo: (
      <>
        <div className="author-info">
          <Title level={5}>73294vqwedwe</Title>
        </div>
      </>
    ),
  },
];

export default function NiamAdminDash() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const {
    signedIn,
    isAuthenticated,
    setIsAuthenticated,
    handleSignin,
    handleSignout,
    handleOrgValidify,
  } = useNiamContext();

  const [reverse, setReverse] = useState(false);
  const [orgs, setOrgs] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (!signedIn) {
      router.push("/NiamLogin");
    } else if (signedIn) {
      async function fetchOrgs() {
        try {
          const response = await axios.get("https://niambackend.cyclic.app/api/niamadmin/allorg",{withCredentials:true});
          setOrgs(response.data.data || []);
          console.log("Ogrs loaded: ", response.data.data.length);
        } catch (error) {
          console.log(error.response.data);
        }
      }
      fetchOrgs();
    } else {
      console.log("What the fish!");
    }
  }, [signedIn, router]);

  const [selectedOrg, setSelectedOrg] = useState("");
  // useEffect(() => {
  //   setSelectedOrg(value);
  // }, [setSelectedOrg]);
  const handleOrgChange = (value) => {
    setSelectedOrg(value);
  };

  const orgsArray = Object.values(orgs).map((org) => ({
    label: org.orgDomain, // Replace with the desired property for the label
    value: org._id, // Replace with the desired property for the value
  }));

  // const [reason, setReason] = useState("");
  // const handleReason = (value) => {
  //   setReason(value);
  // }

  const [orgInfo, setOrgInfo] = useState("");
  const handleOrgSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      orgDomain: selectedOrg,
    };
    try {
      const response = await axios.post("/api/niamadmin/searchorg", formData,{withCredentials: true});
      console.log(response.data);
      setOrgInfo(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <Title>Organization Admin Dashboard</Title>
      <div
        className="summaryCards"
        gutter={[24, 50]}
        xs="22"
        lg={22}
        style={{
          paddingLeft: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          <Col xs="5" lg={5} className="mb-24">
            <div className="circlebox">
              <Card
                bordered={false}
                className="accessApproved"
                style={{
                  width: "15vw",
                  margin: "0 30px",
                }}
              >
                <div className="number">
                  <Row align="middle" gutter={[8, 0]} justify="center">
                    <Col xs={24} align="middle" justify="center">
                      <Title
                        level={5}
                        style={{ marginBottom: "24px", fontSize: "3em" }}
                      >
                        {console.log("Number of orgs: ", orgs.length)}
                        {orgs.length}
                      </Title>
                      <span>Number of Orgs</span>
                    </Col>
                  </Row>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: "90vw",
        }}
        onSubmit={handleOrgSubmit}
      >
        <Form.Item label="Check Organization" className="checkOrg">
          <Select
            showSearch
            placeholder="Select an org"
            optionFilterProp="children"
            style={{ width: 320 }}
            onSearch={() => {}}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            onChange={handleOrgChange}
            options={orgsArray}
          />
          {console.log("Orgs for select: ", orgs)}
        </Form.Item>
        <Form.Item label="Reason">
          <TextArea
            showCount
            maxLength={400}
            style={{ width: 320 }}
            onChange={(e) => {
              e.target.value;
            }}
          />
        </Form.Item>
        <br />
        <Button type="primary" htmlType="submit">
          Check Organization
        </Button>
      </Form>
      <div className="orgDetails">
        <p>{orgInfo}</p>
      </div>
      <div
        className="logoutButton"
        align="middle"
        justify="center"
        style={{ width: "100vw" }}
      >
        <Button
          type="primary"
          size="large"
          style={{
            background: "#F44336",
            color: "white",
            fontWeight: 500,
            padding: "10px 30px",
            margin: "0 0",
            lineHeight: "1.1em",
          }}
          icon={<LogoutOutlined />}
          onClick={handleSignout}
        >
          Logout
        </Button>
      </div>
    </>
  );
}
