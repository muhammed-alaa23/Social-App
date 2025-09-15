import {Card, Skeleton} from "@heroui/react";
import LoadingScreen from "./LoadingScreen";

export default function SkeletonLoader() {
  return (
    <div className="flex flex-col justify-center mx-auto px-4">
      <Card className="w-[600px] h-[80vh] space-y-5 p-4 mx-auto mt-6" >
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300" />
        </Skeleton>
        <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
    <LoadingScreen />
    </div>
    


    




  );
}