import { Outlet } from 'react-router-dom'
import GachaSelection from '../GachaSelection'
import { styled } from '@mui/material/styles'

const StyledBodyContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  fontFamily: theme.typography.fontFamily,
  padding: 0,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxSizing: 'border-box',
  minHeight: '100vh',
  minWidth: '100vw',
  maxWidth: '100%',
  width: 'auto',
}))

export default function DefaultLayout(): JSX.Element {
  return (
    <StyledBodyContainer>
      <GachaSelection />
      <Outlet />
    </StyledBodyContainer>
  )
}
