import React from "react";

interface FiltersProps {
  onRepoChange: (repo: string) => void;
  onStatusChange: (status: string) => void;
  selectedRepo: string;
  selectedStatus: string;
}

const Filters: React.FC<FiltersProps> = ({
  onRepoChange,
  onStatusChange,
  selectedRepo,
  selectedStatus,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Filter by Repository:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => onRepoChange(e.target.value)}
          value={selectedRepo}
        >
          <option value="all">All Repos</option>
          <option value="repo1">Repo 1</option>
          <option value="repo2">Repo 2</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Filter by Status:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => onStatusChange(e.target.value)}
          value={selectedStatus}
        >
          <option value="all">All Statuses</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
