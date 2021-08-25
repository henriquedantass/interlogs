import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav(){
  return (
    <Stack align='flex-start'>
        <NavSection >
          <NavLink href = "/" icon={RiDashboardLine}>Dashboard</NavLink>  
          <NavLink href="/" icon={RiDashboardLine}>Equipamentos</NavLink>
          <NavLink href="/" icon={RiDashboardLine}>Configurações</NavLink>
        </NavSection>
    </Stack>
  );
}