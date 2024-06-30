'use client'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/theme'

const { Button, Card, Select } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    Card,
    Select,
  },
})

export function Chakra({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
}
