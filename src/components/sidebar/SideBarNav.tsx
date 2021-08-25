import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav(){
  return (
    <Stack align='flex-start'>
        <NavSection >
          <NavLink href = "/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>  
          <NavLink href="/users" icon={RiDashboardLine}>Equipamentos</NavLink>
          <NavLink href="/users" icon={RiDashboardLine}>Configurações</NavLink>
        </NavSection>
    </Stack>
  );
}