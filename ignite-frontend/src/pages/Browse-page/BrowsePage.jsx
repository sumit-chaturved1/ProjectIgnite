import React, { useState } from "react";
import styled from "@emotion/styled";
import { cardData } from "../../shared/constants";
import { CustomCard } from "../../shared/components/CustomCard";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import fundraiser from "../../../api/fundraiser";
export default function BroserPage() {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const formatData = (data) =>
    data
      ? data?.map((props, idx) => {
          return <CustomCard key={idx} props={props} />;
        })
      : [];
  const search = (value) => {
    if (value === "") {
      console.log({ allData });
      setData(allData);
      return;
    }
    const filteredData = data.filter(({ props: { props } }) =>
      props.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filteredData);
    setData(filteredData);
  };
  useEffect(() => {
    fundraiser.getAll().then((res) => {
      console.log({ res });
      setData(formatData(res.allFundraisers));
      setAllData(formatData(res.allFundraisers));
    });
  }, []);
  return (
    <>
      <div className="input-wrapper">
        <FaSearch className="search-icon" />
        <input
          onChange={(e) => {
            search(e.target.value);
          }}
          className="input-box"
          placeholder="Search"
          type="text"
        />
      </div>
      <StyledDiv>
        {data || <h1 className="no-search-data-found">No Data</h1>}
      </StyledDiv>
    </>
  );
}
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-self: center;
  justify-content: space-around;
`;
