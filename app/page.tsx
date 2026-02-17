import Hello from "./components/hello";

export default function Home() {
  console.log("What an I doing here? -- SERVER/CLIENT?");
  return (
    <>
      <h1 className="text-3xl">welcome to NEXTjs</h1>

      <Hello />
    </>
  );
}
