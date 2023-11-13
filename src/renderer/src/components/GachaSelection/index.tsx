import { styled } from "@mui/material/styles";
import { GiClover } from "react-icons/gi";
import { IoSettingsSharp, IoCash } from "react-icons/io5"
import { PiStepsFill } from "react-icons/pi";

const StyledHeaderContainer = styled("header")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "200px",
  minWidth: "200px",
  backgroundColor: theme.palette.background.paper,

  a: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
  },
}));

const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}))

const OptionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "2em",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.background.paper,
    filter: "brightness(125%)",
  },
  "&:active": {
    filter: "brightness(85%)",
  },
}))

export default function GachaSelection(): JSX.Element {
  const gachaTypes = [
    {
      type: "Normal Gacha",
      icon: <IoCash />,
      link: "/normalgacha",
    },
    {
      type: "Step Up Gacha",
      icon: <PiStepsFill />,
      link: "/",
    },
    {
      type: "Lucky Box",
      icon: <GiClover />,
      link: "/",
    }
  ];

  return (
    <StyledHeaderContainer>
      <StyledDiv>
        {gachaTypes.map((gachaType) => (
          <OptionContainer key={gachaType.link}>
            <a href={gachaType.link}>
              {gachaType.type}
            </a>
            {gachaType.icon}
          </OptionContainer>
        ))}
      </StyledDiv>
      <StyledDiv>
        <OptionContainer>
          <a href="/">Settings</a>
          <IoSettingsSharp />
        </OptionContainer>
      </StyledDiv>
    </StyledHeaderContainer>
  );
}