import Content from "../content/example.mdx";

export default function Index() {
  return (
    <div className="flex flex-col border border-red-500 prose prose-slate text-slate-300">
      <Content />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
