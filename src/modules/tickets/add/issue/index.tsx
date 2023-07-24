import React, { useState } from "react";
import TicketsAddTitle from "../TicketsAddTitle";
import TicketsAddIssueCard from "./TicketsAddIssueCard";

export interface ITicketAddStep {
  onCurrentStep: () => void;
}

const MOCK_ISSUES = [
  {
    title: "Mute Appeal",
    description:
      "You may request a mute appeal if you believe you have been wrongly muted and would like an admin to review your case further.",
    isChecked: false,
  },
  {
    title: "Store Problems",
    description:
      "Need assistance with our store? Contact our support team for prompt and professional help.",
    isChecked: false,
  },
  {
    title: "VPN whitelist",
    description:
      "Please note that we do not accept VPNs unless they meet our requirements based off account history and playtime.",
    isChecked: false,
  },
  {
    title: "Other",
    description:
      "None of the other options match your need? Use this option as a general support ticket. Try to avoid abusing this.",
    isChecked: false,
  },
  {
    title: "Report a Cheater",
    description:
      "Cheating in Rust involves using unfair methods for easier gameplay. Cheats can be in-game or from third-party sources.",
    isChecked: false,
  },
  {
    title: "Group Limit",
    description:
      "Exceeding the max number of players allowed in a group is a violation.",
    isChecked: false,
  },
  {
    title: "Rule Violation",
    description:
      "Infraction of server/community rules not listed in other options.",
    isChecked: false,
  },
  {
    title: "Ban Appeal",
    description:
      "You may request a ban appeal if you believe you have been wrongly banned and would like an admin to review your case further.",
    isChecked: false,
  },
];

const TicketAddChooseIssue: React.FC = () => {
  const [issues, setIssues] = useState(MOCK_ISSUES);
  const handleCurrentIssue = (currentIssue: number) => () => {
    setIssues(
      issues.map((issue, i) => {
        if (i === currentIssue) {
          return {
            ...issue,
            isChecked: true,
          };
        } else
          return {
            ...issue,
            isChecked: false,
          };
      })
    );
  };
  return (
    <div className="flex flex-col gap-2.5">
      <TicketsAddTitle title="Choose an issue" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-2.5">
        {issues.map((issue, key) => (
          <TicketsAddIssueCard
            title={issue.title}
            description={issue.description}
            key={key}
            currentIssue={issue.isChecked}
            onCurrentIssue={handleCurrentIssue(key)}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketAddChooseIssue;
