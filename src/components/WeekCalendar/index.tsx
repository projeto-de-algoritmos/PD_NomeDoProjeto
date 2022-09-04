import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Disciplina } from "../../../graph";

const initialState =['Livre', 'Livre', 'Livre', 'Livre', 'Livre']
export default function WeekCalendar({disciplines}: {disciplines: Disciplina[]}) {
  const [disciplinesPerDay, setDisciplinesPerDay] = useState<string[][]>([[...initialState], [...initialState], [...initialState], [...initialState], [...initialState], [...initialState]])

  useEffect(() => {
    if (disciplines.length > 0) {
      for (const discipline of disciplines) {
        for (const hour of discipline.horarios as string[]) {
          const indexes = hour.split('')
          
          disciplinesPerDay[Number(indexes[1])][Number(indexes[0])] = discipline.nome
          
        }
      }
      setDisciplinesPerDay(disciplinesPerDay)
    }
  }, [disciplines, disciplinesPerDay])

  return (
  <>
    <TableContainer>
      <Table colorScheme={'blue'} variant={'striped'}>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Segunda</Th>
            <Th>Terça</Th>
            <Th>Quarta</Th>
            <Th>Quinta</Th>
            <Th>Sexta</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>8h</Td>
            {
              disciplinesPerDay[0].map((disciplinePerDay, index) => {
                return (
                  <Td key={index}>{disciplinePerDay}</Td>
                )
              })
            }
          </Tr>
          <Tr>
            <Td>10h</Td>
            {
              disciplinesPerDay[1].map((disciplinePerDay, index) => {
                return (
                  <Td key={index}>{disciplinePerDay}</Td>
                )
              })
            }
          </Tr>
          <Tr>
            <Td>12h</Td>
            {
              disciplinesPerDay[2].map((disciplinePerDay, index)  => {
                return (
                  <Td key={index}>{disciplinePerDay}</Td>
                )
              })
            }
          </Tr>
          <Tr>
            <Td>14h</Td>
            {
              disciplinesPerDay[3].map((disciplinePerDay, index)  => {
                return (
                  <Td key={index}>{disciplinePerDay}</Td>
                )
              })
            }
          </Tr>
          <Tr>
            <Td>16h</Td>
            {
              disciplinesPerDay[4].map((disciplinePerDay, index)  => {
                return (
                  <Td key={index}>{disciplinePerDay}</Td>
                )
              })
            }
          </Tr>
          <Tr>
            <Td>18h</Td>
            {
              disciplinesPerDay[5].map((disciplinePerDay, index)  => {
                return (
                  <Td key={index}>{disciplinePerDay}</Td>
                )
              })
            }
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  </>
  )
}