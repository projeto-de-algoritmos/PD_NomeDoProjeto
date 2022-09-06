import { HStack, Input, Select } from "@chakra-ui/react";
import { Atividade, Disciplina } from "../../../graph";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

interface ActivityProps {
  disciplinas: Disciplina[]
  atividade: Atividade
}

export default function Activity({atividade, disciplinas}:ActivityProps) {
  return (<>
  <HStack>
    <FormControl>
      <FormLabel>Nome</FormLabel>
      <Input />
    </FormControl>
    <FormControl>
      <FormLabel>Peso</FormLabel>
      <Input type={'number'} max="10" min={1} value={atividade.peso} />
    </FormControl>
    <FormControl>
      <FormLabel>Inicio</FormLabel>
      <Input value={atividade.inicio} type={'number'} />
    </FormControl>
    <FormControl>
      <FormLabel>Fim</FormLabel>
      <Input value={atividade.fim} type={'number'} />
    </FormControl>
    <FormControl>
      <FormLabel>Disciplina</FormLabel>
      <Select defaultValue={atividade.nome}>
        {disciplinas.map(disciplina => (
          <option key={disciplina.nome} value={disciplina.nome}>{disciplina.nome}</option>
        ))}
      </Select>
    </FormControl>
  </HStack>
  </>)
}