export default function DiscussionDropDown() {
  return (
    <div className="flex flex-col">
      <div className="bg-background rounded-[14px] p-3">
        <span className="font-medium text-secondary text-xs">Dropdown Menu</span>
        <p className="text-[#ccc] text-xs mb-2">This is a dropdown menu example.</p>
        <div className="flex items-center gap-2">
          <button className="bg-gray-400 p-2 rounded">Action 1</button>
          <button className="bg-gray-400 p-2 rounded">Action 2</button>
        </div>
      </div>
    </div>
  );
}
