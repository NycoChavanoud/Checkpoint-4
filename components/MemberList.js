import axios from "axios";
import { useState, useEffect } from "react";
import style from "../styles/RoyalCour.module.css";
import MemberCard from "./memberCard";

export default function MemberList() {
  const [memberList, setMemberList] = useState([]);
  const [indexOfMember, setIndexOfMember] = useState(false);

  const fetchMemberList = () => {
    axios.get("api/royalCourt/").then((res) => setMemberList(res.data));
  };

  useEffect(() => {
    fetchMemberList();
  }, []);

  console.log("log de memberlist", memberList);
  console.log(indexOfMember);

  return (
    <>
      <div className={style.listMemberContainer}>
        {memberList.map((member, index) => {
          return (
            <>
              <ul className={style.memberContainer}>
                <li
                  key={index}
                  className={style.listMembers}
                  onClick={() => {
                    setIndexOfMember(index);
                  }}
                >
                  <div className={style.imagecontainer}>
                    <img
                      className={style.avatarOnList}
                      src={`/${member.imageUrl}`}
                      alt={member.name}
                    />
                  </div>

                  <div className={style.nameOnList}>{member.name}</div>
                </li>
              </ul>
            </>
          );
        })}
      </div>
      <div>
        {indexOfMember === false ? (
          <span> </span>
        ) : (
          <span>
            <MemberCard
              key={indexOfMember}
              name={memberList[indexOfMember].name}
              baseline={memberList[indexOfMember].baseLine}
              role={memberList[indexOfMember].role}
              description={memberList[indexOfMember].description}
              imageUrl={memberList[indexOfMember].imageUrl}
            />
          </span>
        )}
      </div>
    </>
  );
}
