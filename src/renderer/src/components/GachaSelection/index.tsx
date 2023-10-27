import { styled } from "@mui/material/styles";

const StyledHeaderContainer = styled("header")(({ theme }) => ({
  a: {
    textDecoration: "none",
    color: theme.palette.text.secondary, // Use a cor secundária do tema
  },
}));

export default function GachaSelection(): JSX.Element {
  const gachaTypes = [
    {
      type: "Normal Gacha",
      link: "/normalgacha",
    },
  ];

  return (
    <StyledHeaderContainer>
      {gachaTypes.map((gachaType) => (
        <a key={gachaType.link} href={gachaType.link}>
          {gachaType.type}
        </a>
      ))}
    </StyledHeaderContainer>
  );
}