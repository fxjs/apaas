import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { MenuButton } from "@/components";
import { Account } from "@/components/icon";

const id = "account";
const search = `?appId=${id}`;

const AccountMenuButton: FC = () => {
  const navigate = useNavigate();
  return (
    <MenuButton
      icon={<Account />}
      onClick={() => navigate(search)}
    >
      个人设置
    </MenuButton>
  )
}

export {
  id,
  AccountMenuButton
};