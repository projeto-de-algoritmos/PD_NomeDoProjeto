import { Box } from "@chakra-ui/react";
import {  useState } from "react";
import { Disciplina } from "../../graph";

type LessonProps = {
  data: Disciplina
  onClick?: (data: Disciplina) => void 
}
export default function Lesson({data, onClick}: LessonProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const lessonSelected = () => {
    setIsSelected(!isSelected)
    onClick ? onClick(data) : ''
  }
  
  return (
    <Box
    maxW={'sm'} 
    overflow='hidden' 
    borderWidth={1} 
    maxWidth={160}
    minWidth={160}
    minHeight={130}
    cursor={'pointer'}
    onClick={lessonSelected}
    >
      <Box backgroundColor={isSelected ? 'blue.200':'gray.200'} padding={1}  textAlign={'center'} borderBottomWidth={1}>{data.sigla}</Box>
      <Box backgroundColor={isSelected ? 'blue.100':'gray.100'} padding={3} textAlign={'center'} height={'100%'}>{data.nome}</Box>
    </Box>
    )
}