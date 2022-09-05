import { ReactNode } from "react"
import {VStack, Badge} from '@chakra-ui/react'

type semesterProps = {
  semester: number
  children: ReactNode
}
export default function Semester({children, semester}: semesterProps) {
  return (
  <VStack  >
    <Badge 
    paddingTop={1}
    paddingBottom={1}
    minWidth={160}
    textAlign={'center'}
    colorScheme="green"
    fontSize={'1em'} 
    >{semester}º Semestre</Badge>
    <VStack spacing={'.5em'}>
      {children}
    </VStack>
  </VStack>
  )
}