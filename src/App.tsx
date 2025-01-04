import React, { useState } from "react";
import IssueList from "./components/IssueList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filter";
import Button from "./components/Button";

// Sample initial issues data
const initialIssues = [
  {
    id: 1,
    title: "Fix bug in the app",
    repo: "repo1",
    status: "Open",
    labels: ["bug"],
    date: "2025-01-01",
    link: "https://github.com/your-repo/issues/1",
  },
  {
    id: 2,
    title: "Add new feature",
    repo: "repo2",
    status: "Closed",
    labels: ["enhancement"],
    date: "2025-01-02",
    link: "https://github.com/your-repo/issues/2",
  },
  {
    id: 3,
    title: "UI Improvements",
    repo: "repo1",
    status: "In Progress",
    labels: ["design"],
    date: "2025-01-03",
    link: "https://github.com/your-repo/issues/3",
  },
];

const App: React.FC = () => {
  const [issues, setIssues] = useState(initialIssues);
  const [filterText, setFilterText] = useState("");
  const [selectedRepo, setSelectedRepo] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Handle search input change
  const handleSearch = (text: string) => setFilterText(text);

  // Filter issues based on search and selected filters
  const filteredIssues = issues.filter((issue) => {
    const matchesSearch = issue.title
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchesRepo = selectedRepo === "all" || issue.repo === selectedRepo;
    const matchesStatus =
      selectedStatus === "all" || issue.status === selectedStatus;
    return matchesSearch && matchesRepo && matchesStatus;
  });

  return (
    <div className="flex flex-col bg-gray-100 h-96 w-96">
      <header className="text-white bg-gray-800 p-2 text-center">
        <h1 className="text-2xl font-semibold">IssueSaver</h1>
      </header>
      <div className="flex flex-grow mt-4">
        <div className="w-72 space-y-4">
          <SearchBar onSearch={handleSearch} />
          <Filters
            onRepoChange={setSelectedRepo}
            onStatusChange={setSelectedStatus}
            selectedRepo={selectedRepo}
            selectedStatus={selectedStatus}
          />
        </div>
        
        <div className="flex-grow space-y-4 ml-4">
          <IssueList issues={filteredIssues} />
          <div className="flex space-x-4 mt-4">
            <Button>Add New Issue</Button>
            <Button>Export Issues</Button>
            <Button>Clear All</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
