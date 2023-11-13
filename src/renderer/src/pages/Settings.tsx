import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    user: '',
    ip: '',
    database: '',
    password: '',
  })

  const localStorageKey = 'databaseCredentials'

  const saveSettings = (settingsToSave) => {
    try {
      const settingsJSON = JSON.stringify(settingsToSave)
      localStorage.setItem(localStorageKey, settingsJSON)
    } catch (error) {
      console.error('Fail to save configs: ', error)
    }
  }

  const loadSettings = () => {
    try {
      const storedSettings = localStorage.getItem(localStorageKey)
      if (storedSettings) {
        const parsedSettings = JSON.parse(storedSettings)
        setSettings(parsedSettings)
      }
    } catch (error) {
      console.error('Fail to load configs: ', error)
    }
  }

  useEffect(() => {
    loadSettings()
  }, [])

  const handleInputChange = (field) => (event) => {
    setSettings({ ...settings, [field]: event.target.value })
  }

  const handleSave = () => {
    saveSettings(settings)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5'>
          Database config
        </Typography>
        <Box component='form' noValidate sx={{ mt: 3 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            label='user'
            value={settings.user}
            onChange={handleInputChange('user')}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='ip'
            value={settings.ip}
            onChange={handleInputChange('ip')}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='database'
            value={settings.database}
            onChange={handleInputChange('database')}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='password'
            type='password'
            value={settings.password}
            onChange={handleInputChange('password')}
          />
          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={handleSave}
            sx={{ mt: 3 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
