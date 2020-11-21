import React from 'react'
import { useSelector } from 'react-redux'
import TestModal from '../../../features/sandbox/TestModal'
import LoginForm from '../../../features/auth/LoginForm'

export default function ModalManager() {
  // 全modalの種類をここにset, reduxから得られるmodalTypeをkeyにrenderするcomponentを返す
  const modalLookup = {
    TestModal,
    LoginForm,
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
