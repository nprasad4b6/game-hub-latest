import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card width={"50px"}>
        <Skeleton height={"50px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
