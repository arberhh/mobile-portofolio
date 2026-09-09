import { Props } from "@/types";

interface WebAppShellProps extends Props {
  active?: "Home" | "User";
}

function WebAppShell({ children }: WebAppShellProps) {
  return <>{children}</>;
}

export default WebAppShell;
