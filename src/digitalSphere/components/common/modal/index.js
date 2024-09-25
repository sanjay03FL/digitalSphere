import React from "react";
import { ModalDialog, ModalHeader, ModalBody, ModalFooter, Modal } from "react-bootstrap";
const SimpleModal = (props) => {
  const { modalHeader, modalBody, modalFooter, open, close, modalSize } = props;
  console.log(open, "open");

  return (
    <div>
      <Modal show={open} onHide={close} fullscreen={"xl-down"} className="table-transistion">
        <ModalHeader closeButton className={modalHeader ? "modalTitleBottom" : "sampleClass"} style={{ width: "100%" }}>
          <div className="d-flex align-items-baseline">{modalHeader}</div>
        </ModalHeader>

        <ModalBody>{modalBody}</ModalBody>
        <ModalFooter>{modalFooter}</ModalFooter>
      </Modal>
    </div>
  );
};

export default SimpleModal;
