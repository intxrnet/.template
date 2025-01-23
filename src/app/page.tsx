import CenterCloud from "./components/center-cloud";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="h-[4vh]"></div>
      <CenterCloud
        items={[
          { text: "first item", description: "first item description" },
          { text: "second item", description: "second item description" },
          { text: "third item", description: "third item description" },
        ]}
      ></CenterCloud>
    </div>
  );
}
