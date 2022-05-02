
interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-[#8257e6] px-4 rounded text-violet-200 hover:bg-violet-700 transition-colors">{props.text ?? 'Button'}</button>
}

function App() {
  return <div className="flex gap-2">
    <Button text="Send" />
    <Button text="Ok" />
    <Button />
  </div>
}

export default App
