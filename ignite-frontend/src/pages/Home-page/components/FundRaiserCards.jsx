import React, { useEffect, useState } from "react";
import { CustomCard } from "../../../shared/components/CustomCard";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import fundraiser from "../../../../api/fundraiser";
export default function FundRaiserCards() {
  const [data, setData] = useState();
  const formatData = (data) => data ? data?.map((props, idx) => {
    return <CustomCard key={idx} props={props} />;
  }) : [];
  useEffect(() => {
    fundraiser.getAll().then((res) => {
      console.log({ res });
      setData(formatData(res.allFundraisers))
    });
  },[])
  console.log({ data });
  return (
    <StyledDiv>
      {data && data.slice(0,6)?.map(({ props }, idx) => {
        return <CustomCard key={idx} props={props.props} />;
      }) || <CircularProgress />}
    </StyledDiv>
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
