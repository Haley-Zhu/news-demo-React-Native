export const modifyFontSize = value => ({
  value,
  type: 'MODIFY_FONTSIZE',
})

export const setFontSliderVisible = (isFontSliderVisible = false) => ({
  isFontSliderVisible,
  type: 'SHOW_FONTSLIDER',
})