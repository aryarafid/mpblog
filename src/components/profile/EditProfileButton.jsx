import { Avatar, Button, HStack, Text, useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import React from 'react'
import EditProfileFunction from './EditProfileFunction'

export const RegisterButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            {/* <a href='register'>
                <Button>
                    Register
                </Button>
            </a> */}

            <Button onClick={onOpen}>Edit Profil</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Profil</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Lorem count={2} /> */}
                        <EditProfileFunction></EditProfileFunction>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </div>
    )
}

export default RegisterButton
