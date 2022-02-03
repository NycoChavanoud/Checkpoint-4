import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import MemberCard from "../../components/memberCard";
import style from "../../styles/RoyalSpace.module.css";

export default function RoyalCourt() {
  const [memberList, setMemberList] = useState([]);

  const fetchMemberList = () => {
    axios.get("api/royalCourt/").then((res) => setMemberList(res.data));
  };

  useEffect(() => {
    fetchMemberList();
  }, []);

  console.log("log de memberlist", memberList);

  return (
    <Layout pageTitle="Le roi et les autres...">
      <div className={style.listMemberContainer}>
        {memberList.map((member, index) => {
          return (
            <>
              <ul>
                <li key={index}>
                  <MemberCard
                    name={member.name}
                    role={member.role}
                    baseline={member.baseLine}
                    description={member.description}
                    imageUrl={member.imageUrl}
                  />
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </Layout>
  );
}
