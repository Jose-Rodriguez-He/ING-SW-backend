import { Container,Heading,  Button, HStack,Link,Box} from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'
import Arriba from '../components/Arriba'

export const index = () => {


    const router = useRouter()
    return (
        <Box>
        <Arriba/>
            <Container maxW="container.xl">
                <Heading textAlign={"center"} my={15}>Bienvenido</Heading>
                <HStack w={"full"} py={'28'}>
                    <Button w={"full"} colorScheme={"teal"} float={"right"} onClick={()=>router.push('/asamblea/ver')} >Asambleas</Button>
                    <Button w={"full"} colorScheme={"teal"} float={"right"} onClick={()=>router.push('/archivos/verArchivos')} >Historial de Actas</Button>
                    <Button w={"full"} colorScheme={"teal"} float={"right"} onClick={()=>router.push('/asamblea/ver')} >Mandar Avisos</Button>
                </HStack>
            </Container>
        </Box>
    )
}

export default index
