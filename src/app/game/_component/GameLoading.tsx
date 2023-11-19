import { Card, Skeleton } from "@nextui-org/react";

export default function GameLoading() {
  return (
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
  );
}
