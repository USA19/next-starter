import palette from "../palette";

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        WebkitFontSmoothing: 'auto',
      },

      "*": {
        boxSizing: 'border-box',

        '&::-webkit-scrollbar': {
          width: '7px',
          height: '7px'
        },

        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#0000003b',
          borderRadius: '20px',
        }
      },

      "a:active": {
        textDecoration: 'none'
      },

      'a': {
        textDecoration: 'none',
      },

      body: {
        backgroundColor: palette.redDev,
        margin: 0,

        "& .SnackbarItem-wrappedRoot": {
          top: '70px !important'
        },

        '.SnackbarItem-message': {
          flex: 1
        }
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        fontSize: '16px',
        fontWeight: '400',
      }
    }
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '16px',
        color: palette.secondary.light,
      }
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: '16px',
        padding: '8px 16px',

        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
          fontSize: '14px',
        },
        '&.MuiButton-sizeSmall': {
          fontSize: '0.8125rem',
        },

        '&.MaterialButton-contained': {
          fontWeight: 500,
          fontSize: 14,
          letterSpacing: 0.4,
          height: 36,
        },

        '&.MaterialButton-spacing': {
          [`@media only screen and (max-width: 600px)`]: {
            marginTop: 20,
          }
        },

        '&.MuiButton-IconText': {
          fontWeight: 500,
          fontSize: 13,
          letterSpacing: 0.46,
          color: "#000000",
          background: "#F5F5F5",
          borderRadius: 4,
          padding: "4px 10px",
          boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',

          '& svg': {
            marginRight: 8,
          }
        }
      },
    }
  },

  MuiBadge: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        fontSize: 12,

        '& .MuiBadge-colorSuccess': {
          color: "#344054",
          backgroundColor: "#E0F2F1",
        }
      },
    }
  },

  MuiTypography: {
    styleOverrides: {
      root: {
        '&.CaseDetail-Title': {
          fontSize: "18px",
          fontWeight: 700,
          width: 170,
          color: "#000000",
          letterSpacing: "0.04em",
        },

        '&.CaseDetail-SubTitle': {
          fontSize: "18px",
          fontWeight: 400,
          color: "#0A071B",
          letterSpacing: "-0.03em",

          '& a': {
            color: "#0A071B",
          }
        }
      },
    }
  },

  MuiTable: {
    styleOverrides: {
      root: {
        fontSize: '14px',

        th: {
          fontWeight: '500',
        },

        td: {
          fontWeight: '400',
        }
      }
    }
  },

  MuiListItemButton: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        color: palette.wardGray,
        fontWeight: '500',
        textTransform: 'capitalize' as const,
        paddingTop: '16px',

        "&.Mui-selected": {
          backgroundColor: "transparent",
          position: 'relative',
          color: palette.primary.main,

          "&::after": {
            content: '""',
            borderBottom: `2px solid ${palette.primary.main}`,
            position: 'absolute',
            height: '2px',
            width: '100%',
            bottom: '-16px',
            left: '0',
          }
        }
      }
    }
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        fontSize: '16px'
      }
    }
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: palette.white,
      }
    }
  },

  MuiIconButton: {
    styleOverrides: {
      root: {

        '&.MuiIconButton-light': {
          backgroundColor: "#ffffff",
          width: 40,
          height: 40,
          borderRadius: "50%",
          boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12)',
        },

        '&.MuiIconButton-document': {
          boxShadow: "none",
          backgroundColor: "rgba(119, 17, 23, 0.04)",
          width: 40,
          height: 40,
          borderRadius: "50%",
        }
      }
    }
  }
}

export default components;