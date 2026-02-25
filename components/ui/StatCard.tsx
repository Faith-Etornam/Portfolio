interface Props {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: Props) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl text-center">
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        {number}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
