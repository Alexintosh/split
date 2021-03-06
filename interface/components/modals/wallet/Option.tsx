import React from "react";
import styled from "styled-components";
import { PrimaryAnchor } from "../../anchor";
import { SecondaryDarkButton } from "../../button";
import { FadedDark } from "../../typography";

const InfoCard = styled(SecondaryDarkButton)`
  position: relative;
  width: 100% !important;
`;

const OptionCard = styled(InfoCard as any)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem;
`;

const OptionCardLeft = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap};
  justify-content: center;
  height: 100%;
`;

const OptionCardClickable = styled(OptionCard as any)<{ clickable?: boolean }>`
  margin-top: 0;
  &:hover {
    cursor: ${({ clickable }) => (clickable ? "pointer" : "")};
    border: ${({ clickable, theme }) => (clickable ? `1px solid ${theme.primary1}` : ``)};
  }
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

const GreenCircle = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  justify-content: center;
  align-items: center;

  &:first-child {
    height: 8px;
    width: 8px;
    margin-right: 8px;
    background-color: ${({ theme }) => theme.green1};
    border-radius: 50%;
  }
`;

const CircleWrapper = styled.div`
  color: ${({ theme }) => theme.green1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  color: ${props => (props.color === "blue" ? ({ theme }) => theme.primary1 : ({ theme }) => theme.text1)};
  font-size: 1rem;
  font-weight: 500;
`;

const SubHeader = styled.div`
  color: ${({ theme }) => theme.text1};
  margin-top: 10px;
  font-size: 12px;
`;

export default function Option({
  link = null,
  clickable = true,
  size,
  onClick = null,
  color,
  header,
  subheader = null,
  icon,
  active = false,
  id,
}: {
  link?: string | null;
  clickable?: boolean;
  size?: number | null;
  onClick?: null | (() => void);
  color: string;
  header: React.ReactNode;
  subheader: React.ReactNode | null;
  icon: React.ReactNode;
  active?: boolean;
  id: string;
}) {
  const content = (
    <OptionCardClickable id={id} onClick={onClick} clickable={clickable && !active} active={active}>
      {header}
      {active ? <FadedDark>current</FadedDark> : <></>}
    </OptionCardClickable>
  );
  if (link) {
    return <PrimaryAnchor href={link}>{content}</PrimaryAnchor>;
  }

  return content;
}
