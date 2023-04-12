import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

export default function SortButton({ text, ascending=true, onClick }) {
  return (
    <button
      className="flex items-center bg-gray-100 border-2 rounded-full px-4 py-2 "
      onClick={onClick}
      style={{borderColor:"#E7EFF8"}}
    >
      <span className="mr-2 text-gray-400">{text}</span>
      {ascending ? (
        <ChevronUpIcon className="h-4 w-4 border-blue" />
      ) : (
        <ChevronDownIcon className="h-4 w-4 border-blue" />
      )}
    </button>
  );
}