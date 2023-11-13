import { styled } from "@mui/material/styles";

type Props = {
  id: number,
  name: string
}

const StyledGachaBanner = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  height: '100%',
  paddingBlock: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',

  '&:hover': {
    filter: 'brightness(125%)',
  },
  '&:active': {
    filter: 'brightness(85%)',
  }
}));


export default function GachaBanner(props: Props) {
  return (
    <StyledGachaBanner>
      <h2>{props.name}</h2>
    </StyledGachaBanner>
  )
}