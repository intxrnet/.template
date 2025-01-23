import CenterCloud from "./components/center-cloud";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="h-[4vh]"></div>
      <CenterCloud
        items={[
          { text: "first item" },
          { text: "second item" },
          { text: "third item" },
        ]}
      ></CenterCloud>
    </div>
  );
}
