import React from 'react'
import Button from 'material-ui/Button'

const Logout = ({ logout }) => {
  return (
    <Button
      variant="flat"
      size="small"
      onClick={logout}
      style={{ textTransform: 'none' }}
    >
      Logout
    </Button>
  )
}

export default Logout
