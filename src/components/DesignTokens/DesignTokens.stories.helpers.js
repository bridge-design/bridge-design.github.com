import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';

import { colors, fonts } from '.';

const Palette = () => {

  return (
    <ColorPalette>
      {Object.keys(colors).map(color => <ColorItem title={color} subtitle={colors[color].meaning} colors={[colors[color].value]} />)}
    </ColorPalette>
  )
}

const FontsDisplay = () => {
  return (
    <>
      {Object.keys(fonts).map(font => (
        <div style={{fontFamily: fonts[font]}}>
          <h2>Title</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      ))}
    </>
  )
}

export {
  Palette,
  FontsDisplay,
}
