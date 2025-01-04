import React from "react";

interface Issue {
  id: number;
  title: string;
  repo: string;
  status: string;
  labels: string[];
  date: string;
  link: string;
}

interface IssueListProps {
  issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  return (
    <div className="flex flex-col space-y-4">
      {issues.length === 0 ? (
        <div className="text-gray-500">No issues found.</div>
      ) : (
        issues.map((issue) => (
          <div
            key={issue.id}
            className="p-4 bg-white shadow rounded-md border border-gray-200"
          >
            <h3 className="font-semibold text-xl">
              <a
                href={issue.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {issue.title}
              </a>
            </h3>
            <p className="text-gray-600">Repository: {issue.repo}</p>
            <p className="text-gray-600">Status: {issue.status}</p>
            <p className="text-gray-600">Labels: {issue.labels.join(", ")}</p>
            <p className="text-gray-600">Date Saved: {issue.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default IssueList;
