import React from 'react'
import { useSelector } from 'react-redux'
import TestModal from '../../../features/sandbox/TestModal'

export default function ModalManager() {
  // 全modalの種類をここにset, reduxから得られるmodalTypeをkeyにrenderするcomponentを返す
  const modalLookup = {
    TestModal,
  }
  const currentModal = useSelector((state) => state.modals)
  let renderedModal
  if (currentModal) {
    const { modalType, modalProps } = currentModal
    const ModalComponent = modalLookup[modalType]
    renderedModal = <ModalComponent {...modalProps} />
  }
  return <span>{renderedModal}</span>
}
