import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Select,
  SelectItem,
} from '@heroui/react'
import { Link } from '@remix-run/react'

const TASK_STATUS = ['DONE', 'TODO', 'IN_PRGGRESS']

export default function EditPage() {
  const { onOpenChange } = useDisclosure()

  return (
    <Modal
      isOpen={true}
      onOpenChange={onOpenChange}
      closeButton={
        <Link to="/" aria-label="Close modal">
          X
        </Link>
      }
    >
      <ModalContent>
        <ModalHeader>Edit task</ModalHeader>
        <ModalBody>
          <h1>Modal With Select</h1>
          <Select
            label="Status"
            labelPlacement="outside"
            aria-label="Status"
            name="status"
            defaultSelectedKeys={['DONE']}
          >
            {TASK_STATUS.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </Select>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
