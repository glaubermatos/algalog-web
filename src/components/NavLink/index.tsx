import { ReactNode } from "react";
import { Link, useRouteMatch } from "react-router-dom";

interface NavLinkProps {
    to: string;
    label?: string;
    activeOnlyWhenExact?: boolean;
    children: ReactNode;
}

export function NavLink(props: NavLinkProps) {
  let match = useRouteMatch({
    path: props.to,
    exact: props.activeOnlyWhenExact
  });

  return (
    <Link to={props.to} className={match ? "active" : ""}>
      {props.children}
    </Link>
  );
}
