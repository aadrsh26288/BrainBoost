import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";

const Modalshow = () => {
	const [opened, { open, close }] = useDisclosure(false);
	return (
		<>
			<Modal opened={opened} onClose={close} withCloseButton={false}>
				Modal without header, press escape or click on overlay to close
			</Modal>

			<Group position='center'>
				<Button onClick={open}>Open Modal</Button>
			</Group>
		</>
	);
};

export default Modalshow;
