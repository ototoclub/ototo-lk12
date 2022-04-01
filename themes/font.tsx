import { Global } from '@emotion/react';

export const Fonts = () => {
  return (
    <Global
      styles={`
			@font-face {
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 900;
    src: local('Sofia Pro'), url('https://fonts.cdnfonts.com/s/14903/Sofia Pro Black Az.woff') format('woff');
}
			`}
    />
  );
};
