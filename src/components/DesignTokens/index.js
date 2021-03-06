let colors = {

  blue100: {
    value: '#E2ECFC'
  },

  blue200: {
    value: '#B7D0F9'
  },

  blue300: {
    value: '#8CB4F5'
  },

  blue400: {
    value: '#6098F1'
  },

  blue500: {
    value: '#357DED',
  },

  blue600: {
    value: '#125CD2'
  },

  blue700: {
    value: '#0F4BAC'
  },

  blue800: {
    value: '#0A3273'
  },

  blue900: {
    value: '#051939'
  },

  pink400: {
    value: '#FFA0CE'
  },

  pink500: {
    value: '#FF78BA'
  },

  pink600: {
    value: '#FF5FAD'
  },

  white: {
    value: '#FFFFFF'
  },

  black: {
    value: '#051939'
  },

};

Object.assign(colors, {

  primary: {
    value: colors.blue400.value,
    meaning: 'Main brand color',
  },

  highlight: {
    value: colors.pink500.value,
    meaning: 'Highlights',
  },

  secondary: {
    value: colors.blue700.value,
    meaning: 'Color for secondary content and elements',
  },

  shadow: {
    value: colors.blue100.value,
    meaning: 'Disabled or not active things',
  }

});

const fonts = {
  brand: '"Rubik", sans-serif',
  regular: '"Roboto", sans-serif',
}

export {
  colors,
  fonts,
}