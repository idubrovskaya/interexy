import { PaletteColorOptions, createTheme } from '@mui/material';

declare module '@mui/material' {
  interface CustomPalette {
    ['primaryHover']?: PaletteColorOptions;
    ['button']?: PaletteColorOptions;
    ['white']?: PaletteColorOptions;
    ['buttonHover']?: PaletteColorOptions;
    ['defaultText']?: PaletteColorOptions;
    ['default']?: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface SwitchPropsColorOverrides {
    'bright-midnight': true;
    default: true;
  }
}

// declare module '@mui/material/MenuItem' {
//   export const MenuItem: any;
//   export default MenuItem;
// }

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    default: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    t1: React.CSSProperties;
    t2: React.CSSProperties;
    t3: React.CSSProperties;
    t4: React.CSSProperties;
    t5: React.CSSProperties;
    t6: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    t1?: React.CSSProperties;
    t2?: React.CSSProperties;
    t3?: React.CSSProperties;
    t4?: React.CSSProperties;
    t5?: React.CSSProperties;
    t6?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    t1: true;
    t2: true;
    t3: true;
    t4: true;
    t5: true;
    t6: true;
  }
}

declare module '@mui/material' {
  interface Color {
    main: string;
  }
}

export const colors = {
  primary: '#eadcfc',
  primaryHover: '#da91da',
  button: '#c993ec',
  buttonHover: '#854392',
  defaultText: '#2b1d54',
  white: '#fff',
  error: '#5241a4',
};

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 'bold',
      fontSize: '60px',
    },
    h2: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 'bold',
      fontSize: '24px',
    },
    h3: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 'normal',
      fontSize: '24px',
    },
    h4: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 'bold',
      fontSize: '18px',
    },
    t1: {
      fontFamily: 'Source Sans Pro',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    t2: {
      fontFamily: 'Source Sans Pro',
      fontSize: '16px',
      fontWeight: 600,
    },
    t3: {
      fontFamily: 'Source Sans Pro',
      fontSize: '16px',
      fontWeight: 'normal',
    },
    t4: {
      fontFamily: 'Source Sans Pro',
      fontSize: '14px',
      fontWeight: 600,
    },
    t5: {
      fontFamily: 'Source Sans Pro',
      fontSize: '14px',
      fontWeight: 'normal',
    },
    t6: {
      fontFamily: 'Source Sans Pro',
      fontSize: '12px',
      fontWeight: 'normal',
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    primaryHover: {
      main: colors.primaryHover,
    },
    button: {
      main: colors.button,
    },
    buttonHover: {
      main: colors.buttonHover,
    },
    defaultText: {
      main: colors.defaultText,
    },
    error: {
      main: colors.error,
    },

    white: {
      main: colors.white,
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#043736',
          color: colors.white,
          padding: '8px 16px',
          fontFamily: 'Source Sans Pro',
          fontSize: '16px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '24px',
          fontFamily: 'Source Sans Pro Regular',

          '&.Mui-selected': {
            color: colors.primaryHover,
          },
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            '& label': {
              color: colors.white,
              fontFamily: 'Source Sans Pro Regular',
              fontSize: '16px',
            },
            '& label.Mui-focused': {
              fontSize: '20px',
              transform: 'translate(14px, 1px) scale(0.75)',
              color: colors.white,
            },

            '& .MuiOutlinedInput-root': {
              '& input': {
                borderRadius: '4px',
              },

              '& input:disabled': {
                borderColor: 'transparent',
                backgroundColor: colors.white,
              },

              '& fieldset': {
                borderColor: colors.white,
              },

              '& fieldset:disabled': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                borderRadius: '4px',
              },
              '&.Mui-focused fieldset': {
                borderColor: colors.white,
                borderRadius: '4px',
              },
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'error' },
          style: {
            '& label': {
              color: colors.white,
              fontFamily: 'Source Sans Pro Regular',
              fontSize: '16px',
            },
            '& label.Mui-focused': {
              fontSize: '20px',
              transform: 'translate(14px, 1px) scale(0.75)',
              color: colors.white,
            },

            '& .MuiFormHelperText-root': {
              color: colors.error,
            },

            '& .MuiOutlinedInput-root': {
              '& input': {
                borderRadius: '4px',
                border: `2px solid ${colors.error}`,
              },

              '& input:disabled': {
                borderColor: 'transparent',
                backgroundColor: colors.white,
              },

              '& fieldset': {
                borderColor: colors.error,
              },

              '& fieldset:disabled': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                borderColor: colors.error,
                borderRadius: '4px',
              },
              '&.Mui-focused fieldset': {
                borderColor: colors.error,
                borderRadius: '4px',
              },
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'interexy-dropdown' as any },
          style: {
            backgroundColor: colors.button,
            color: colors.white,
            padding: '20px',
            fontSize: '22px',
            border: 'none',
            borderRadius: '20px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: colors.buttonHover,
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            fontSize: '16px',
            backgroundColor: colors.white,
          },
        },
        {
          props: {
            variant: 'contained' as any,
            color: 'primary',
            size: 'small',
          },
          style: {
            backgroundColor: colors.primary,
            color: colors.white,
            borderRadius: '8px',
            fontWeight: 600,
            padding: '8px 16px 8px 16px',
            textTransform: 'lowercase',
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:hover': {
              backgroundColor: colors.primary,
            },

            '&:active': {
              backgroundColor: colors.white,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.white,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'default', size: 'small' },
          style: {
            backgroundColor: colors.white,
            color: colors.defaultText,
            borderRadius: '8px',
            fontWeight: 600,
            padding: '8px 16px 8px 16px',
            textTransform: 'lowercase',
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:disabled': {
              color: colors.defaultText,
              backgroundColor: colors.white,
            },
          },
        },
        {
          props: {
            variant: 'contained' as any,
            color: 'primary',
            size: 'medium',
          },
          style: {
            backgroundColor: colors.primary,
            color: colors.white,
            borderRadius: '8px',
            fontWeight: 600,
            padding: '12px 16px 12px 16px',
            textTransform: 'lowercase',
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:hover': {
              backgroundColor: colors.primary,
            },

            '&:active': {
              backgroundColor: colors.white,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.white,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'default', size: 'medium' },
          style: {
            backgroundColor: colors.white,
            color: colors.defaultText,
            borderRadius: '8px',
            fontWeight: 600,
            padding: '12px 16px 12px 16px',
            textTransform: 'lowercase',
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:disabled': {
              color: colors.defaultText,
              backgroundColor: colors.white,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'default', size: 'large' },
          style: {
            backgroundColor: colors.white,
            color: colors.defaultText,
            borderRadius: '8px',
            padding: '16px',
            fontWeight: 600,
            textTransform: 'lowercase',
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:disabled': {
              color: colors.defaultText,
              backgroundColor: colors.white,
            },
          },
        },
        {
          props: {
            variant: 'contained' as any,
            color: 'primary',
            size: 'large',
          },
          style: {
            backgroundColor: colors.primary,
            color: colors.white,
            borderRadius: '8px',
            padding: '16px',
            fontWeight: 600,
            textTransform: 'lowercase',
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:hover': {
              backgroundColor: colors.primary,
            },

            '&:active': {
              backgroundColor: colors.white,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.white,
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary', size: 'small' },
          style: {
            backgroundColor: colors.white,
            color: colors.primary,
            border: '1px solid #041492',
            borderRadius: '8px',
            padding: '8px 16px 8px 16px',
            textTransform: 'lowercase',
            fontSize: '16px',
            fontWeight: 600,
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:active': {
              backgroundColor: colors.white,
              color: colors.white,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.white,
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary', size: 'medium' },
          style: {
            backgroundColor: colors.white,
            color: colors.primary,
            border: '1px solid #041492',
            borderRadius: '8px',
            padding: '12px 16px 12px 16px',
            fontSize: '16px',
            fontWeight: 600,
            textTransform: 'lowercase',
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:active': {
              backgroundColor: colors.white,
              color: colors.white,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.white,
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary', size: 'large' },
          style: {
            backgroundColor: colors.white,
            color: colors.primary,
            border: '1px solid #041492',
            borderRadius: '8px',
            padding: '16px',
            fontSize: '16px',
            fontWeight: 600,
            textTransform: 'lowercase',
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:active': {
              backgroundColor: colors.white,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.white,
            },
          },
        },
        {
          props: { variant: 'text', color: 'primary', size: 'small' },
          style: {
            color: colors.primary,
            padding: '8px 16px 8px 16px',
            fontSize: '16px',
            fontWeight: 600,
            textTransform: 'lowercase',
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:hover': {
              backgroundColor: 'transparent',
            },

            '&:active': {
              color: colors.white,
            },
          },
        },
        {
          props: { variant: 'text', color: 'primary', size: 'medium' },
          style: {
            color: colors.primary,
            padding: '12px 16px 12px 16px',
            fontSize: '16px',
            fontWeight: 600,
            textTransform: 'lowercase',
            fontFamily: 'Source Sans Pro Semibold',
            textAlign: 'center',

            '&:hover': {
              backgroundColor: 'transparent',
            },

            '&:active': {
              color: colors.white,
            },
          },
        },
      ],
    },

    // MuiList: {
    //   styleOverrides: {
    //     root: {
    //       '&.MuiMenu-list': {
    //         backgroundColor: colors.primary,
    //         minWidth: '140px',
    //       },
    //     },
    //   },
    // },
    MuiList: {
      variants: [{ props: {}, style: {} }],
    },
  },
});
