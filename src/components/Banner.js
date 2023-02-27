import { Box, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';
const Banner = (props) => {
  return (
    <div >
      <Image src={props.src} h={props.h} w={props.w} borderRadius={20} />

      <Text

        fontSize={props.fontSize}
        bgGradient={props.textbgGradient}
        bgClip="text"
        fontWeight="bold"
        position="absolute"
        top={props.top}
        left={props.left}
        textAlign="center"
        transform={props.transform}
        dangerouslySetInnerHTML={{ __html: props.heading }}
      >
        {/* {props.heading} */}
      </Text>
      {props.subHeading && (
        <Text
          fontSize={props.subheadfontsize}
          color={props.subheadcolor}
          fontWeight="bold"
          position="absolute"
          top={props.subheadtop}
          left={props.subheadleft}
          transform="translate(-50%, -50%)"
          textAlign="start"
          letterSpacing={props.subheadletterSpacing}
          dangerouslySetInnerHTML={{ __html: props.subHeading }}
        ></Text>
      )}

      <Button
        borderRadius={props.buttonborderRadius}
        position="absolute"
        top={props.buttontop}
        left={props.buttonleft}
        p={props.p}
        bg="red"
        _hover={{
          bgGradient: props.buttonbgGradient,
          bg: props.buttonbg,
        }}
        _active={{
          transform: 'scale(0.90)',
        }}
        color={props.buttoncolor}
        fontSize={props.buttonFontSize}
        width={props.buttonWidth}
        height={props.buttonHeight}
      >
        Buy Now
      </Button>
    </div>
  );
};
export default Banner;
