import React from "react";
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
  },
  {
    title: "Store Problems",
    description:
      "Need assistance with our store? Contact our support team for prompt and professional help.",
  },
  {
    title: "VPN whitelist",
    description:
      "Please note that we do not accept VPNs unless they meet our requirements based off account history and playtime.",
  },
  {
    title: "Other",
    description:
      "None of the other options match your need? Use this option as a general support ticket. Try to avoid abusing this.",
  },
  {
    title: "Report a Cheater",
    description:
      "Cheating in Rust involves using unfair methods for easier gameplay. Cheats can be in-game or from third-party sources.",
  },
  {
    title: "Group Limit",
    description:
      "Exceeding the max number of players allowed in a group is a violation.",
  },
  {
    title: "Rule Violation",
    description:
      "Infraction of server/community rules not listed in other options.",
  },
  {
    title: "Ban Appeal",
    description:
      "You may request a ban appeal if you believe you have been wrongly banned and would like an admin to review your case further.",
  },
];

const TicketAddChooseIssue: React.FC = () => (
  <div className="flex flex-col gap-2.5">
    <TicketsAddTitle title="Choose an issue" />
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-2.5">
      {MOCK_ISSUES.map((issue, key) => (
        <TicketsAddIssueCard
          title={issue.title}
          description={issue.description}
          key={key}
        />
      ))}
    </div>
  </div>
);

export default TicketAddChooseIssue;
