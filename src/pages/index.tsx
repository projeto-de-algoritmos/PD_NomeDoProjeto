import type { NextPage } from 'next'
import Lesson from '../components/Lesson'
import Semester from '../components/Semester'

import {listaDisciplina, Disciplina} from '../../graph'
import React, { useState } from 'react'
import { Box, Button,  Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Progress, useDisclosure, VStack } from '@chakra-ui/react'
import WeekCalendar from '../components/WeekCalendar'
const disciplinas: Disciplina[] = listaDisciplina

const semesterDisciplinas = () => {
  const result: Disciplina[][] = []
  for (let semestre = 8; semestre > 0; semestre-=1) {
    const semestreDisciplinas = disciplinas.filter(disciplina => disciplina.pesoSemestre === semestre/10)
    result.push(semestreDisciplinas)
  }
  return result
}
const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<any>()
  const [selectedDisciplinas, setSelectedDisciplinas] = useState<Disciplina[]>([])
  const [resultDisciplinas, setResultDisciplinas] = useState<Disciplina[]>([])
  const [progress, setProgress] = useState(0)
  const [displaySemesterDisciplinas] = useState(semesterDisciplinas())


  const generateSchedule = () => {
    setResultDisciplinas(selectedDisciplinas)
  }

  const updateProgress = () => {
    const percentage =selectedDisciplinas.length / disciplinas.length
    setProgress(Math.round(percentage *100))
  }

  const selectedDiscipline = (data: Disciplina) => {
    const disciplinaAlreadySelected = selectedDisciplinas.findIndex(selectedDisciplina => selectedDisciplina.nome === data.nome);
    if (disciplinaAlreadySelected >= 0) {
      selectedDisciplinas.splice(disciplinaAlreadySelected, 1)
    } else {
      selectedDisciplinas.push(data)
    }
    
    setSelectedDisciplinas(selectedDisciplinas)
    updateProgress()
  }


  return (

    <Box padding={8}>
      <Heading textAlign={'center'} marginBottom={'3em'}>Agenda Semestral</Heading>
      <Flex marginBottom={'1em'} justifyContent={'space-between'}>
        <Button colorScheme={'blue'} onClick={onOpen}>Ver Matérias selecionadas</Button>
        <Button colorScheme={'green'} onClick={generateSchedule}>Montar Grade</Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Matérias já cursadas</DrawerHeader>

          <DrawerBody>
            <VStack textAlign={'center'}>
              {selectedDisciplinas.map((disciplina, index) => {
                return (
                  <Lesson key={index} onClick={selectedDiscipline} data={disciplina} />
                )
              })}
            </VStack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
      <Box margin={'1em'}>
        <Heading as={'h6'}>
          Progresso para conclusão do curso
        </Heading>
        <Progress value={progress} />
      </Box>
      <Flex justifyContent={'space-between'} >
        {
          displaySemesterDisciplinas.map((semesterDisciplina, index) => {
            return (
              <Semester semester={index+1} key={index}>
                {
                  semesterDisciplina.map((disciplina, index) => {
                    return (
                      <Lesson key={index} onClick={selectedDiscipline} data={disciplina} />
                    )
                  })
                }
              </Semester>
            )
          })
        }
      </Flex>
      <Box>
        <Heading marginTop={'3em'} textAlign={'center'} marginBottom={'2em'}>Sua grade horaria</Heading>
        <WeekCalendar disciplines={resultDisciplinas}></WeekCalendar>
      </Box>
    </Box>
  )
}

export default Home
