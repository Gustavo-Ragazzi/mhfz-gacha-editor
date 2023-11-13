import { Pagination } from '@mui/material'
import GachaBanner from '@renderer/components/GachaBanner'
import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(10),
}))

const BiggerBannerContainer = styled('div')({
  paddingTop: '16px',
  paddingBottom: '16px',
  width: '100%',
});

const SmallBannersContainer = styled('div')({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  gap: '3em 1em',

  '@media (max-width: 550px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});

export default function NormalGacha(): JSX.Element {
  const testGachaList = [
    {
      id: 1,
      name: 'Adaptation Up PZ'
    },
    {
      id: 2,
      name: 'Assistance Up PZ'
    },
    {
      id: 3,
      name: 'Bullet Saver Up PZ'
    },
    {
      id: 4,
      name: 'Ceasceless Up PZ'
    },
    {
      id: 5,
      name: 'Crit Conv Up PZ'
    },
    {
      id: 6,
      name: 'Dissolver Up PZ'
    },
    {
      id: 7,
      name: 'Drug K. Up PZ'
    },
    {
      id: 8,
      name: 'Encourage Up PZ'
    },
    {
      id: 9,
      name: 'Guard Up PZ'
    },
    {
      id: 10,
      name: 'Hearing Up PZ',
    },
    {
      id: 11,
      name: 'Ice Age Up PZ'
    }
  ]

    return (
      <StyledContainer>
        <BiggerBannerContainer>
          <GachaBanner
            id={0}
            name='Bigger Banner'
          />
        </BiggerBannerContainer>
        <SmallBannersContainer>
          {testGachaList.map(item => (
            <GachaBanner
              key={item.name + item.id}
              id={item.id}
              name={item.name}
            />
          ))}
        </SmallBannersContainer>
        <Pagination count={10} />
      </StyledContainer>
    )
}
