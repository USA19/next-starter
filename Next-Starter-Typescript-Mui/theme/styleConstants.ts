import { PopoverOrigin } from "@mui/material"
import customTheme from "."
import palette from "./palette"

export const menuPaperStyles = { sx: { minWidth: "200px" } }
export const anchorOrigin: PopoverOrigin = { vertical: "bottom", horizontal: "right" }
export const transformOrigin: PopoverOrigin = { vertical: "top", horizontal: "right" }
export const displayNone = { sx: { display: 'none' } }
export const caseDetailGrid = {
  paddingInline: '24px',
  paddingBlock: '16px',
  borderBottom: `1px solid ${palette.lightGrayTwo}`
}

export const boxShadowGlobal = {
  boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12)'
}

export const taskListStyle = {
  border: `1px solid ${palette.boxShadowOne}`,
  borderRadius: '4px',
  padding: '10px 16px', color: 'gray',
  marginBottom: '13px'
}

export const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const absoluteCenter = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const drawerImage = {
  maxWidth: '119px',
  width: '100%',
  display: 'block',
  marginTop: '20px',
  marginBottom: '25px'
}

export const autocompletePaperStyles = {
  padding: '10px 20px',
  display: 'flex',
  gap: '20px',
  alignItems: 'center'
}

export const infoText = {
  height: '10px',
  width: '10px',
  borderRadius: '50%',
  marginRight: '5px'
}

export const caseEdit = {
  paddingInline: 0,
  paddingBlock: '16px',
  borderBottom: `1px solid ${palette.lightGrayTwo}`
}

export const menuHeight = {
  style: {
    maxHeight: '190px',
  }
}

export const customPaginationStyles = {
  [customTheme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  }
}
export const eventListingStyle = {
  padding: 0,
  borderRadius: '4px',
  paddingLeft: '4px',
  marginBottom: '8px'
}

export const userTaskListingStyles = {
  fontSize: '8px',
  paddingBlock: 0
}

export const headerListItemsStyle = {
  textTransform: 'uppercase',
  paddingBottom: '16px'
}

export const activeCaseListingStyle = {
  marginTop: '20px',
  maxHeight: '338px',
  overflow: 'auto',
  paddingInline: '5px'
}

export const customPhoneControllerStyle = {
  fontSize: 16,
  borderRadius: '4px',
  padding: '16.5px 14px',
  width: '100%',
}

export const assigneeDropdownStyle = {
  borderRadius: '50%',
  height: '15px',
  width: '15px',
  fontSize: '9px',
  color: palette.white,
  marginRight: '5px',
  position: 'absolute',
  right: '-25px',
  top: 0
}

export const ellipsisStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '4',
  WebkitBoxOrient: 'vertical'
}

export const ellipsisTwoLine = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical'
}

export const editExternalUserStyle = {
  marginTop: '10px',
  marginBottom: '20px',
  fontWeight: 'normal'
}

export const caseDetailTopBanner = {
  textAlign: 'center',
  py: '8px',
  position: 'fixed',
  width: '100%',
  top: '84px',
  left: 0,
  display: 'flex',
  zIndex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',

  [customTheme.breakpoints.down('md')]: {
    top: '77px',
  }
}