import React from "react";
import { ModalHeader, ModalBody, ModalFooter, Modal } from "react-bootstrap";
const SimpleModal = (props) => {
  const { modalHeader, modalBody, modalFooter, open, close, modalSize } = props;

  return (
    <div>
      <Modal show={open} onHide={close} fullscreen={"xl-down"} size={modalSize || "lg"} className="table-transistion">
        {modalHeader && (
          <ModalHeader
            closeButton
            className={modalHeader ? "modalTitleBottom" : "sampleClass"}
            style={{ width: "100%" }}
          >
            <div className="d-flex align-items-baseline">{modalHeader}</div>
          </ModalHeader>
        )}
        {modalBody && <ModalBody>{modalBody}</ModalBody>}
        {modalFooter && <ModalFooter>{modalFooter}</ModalFooter>}
      </Modal>
    </div>
  );
};

export default SimpleModal;
