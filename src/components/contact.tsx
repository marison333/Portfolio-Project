import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function ContactButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="bg-gradient-to-br from-forestgreen to-limegreen text-white w-32"
        color="success"
        variant="shadow"
        onPress={onOpen}
      >
        Contact me
      </Button>

      <Modal backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Let's get in Touch!
              </ModalHeader>
              <ModalBody>Are you sure?</ModalBody>
              <ModalFooter>
                <Button
                  as={Link}
                  className="bg-gradient-to-tr from-forestgreen to-limegreen text-white"
                  href="mailto:marison.sol@outlook.com"
                  variant="shadow"
                  onPress={onClose}
                >
                  yes
                </Button>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  No
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
