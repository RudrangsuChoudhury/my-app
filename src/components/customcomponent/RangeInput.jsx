import React from "react";
import {
  Box,
  Input,

  RangeSlider,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  RangeSliderFilledTrack,

  Tooltip
} from "@chakra-ui/react";
import { useRange } from "react-instantsearch-hooks";

function CustomRangeInput({ attribute, min, max }) {


  const { start, range, canRefine, refine } = useRange({
    attribute,
    min,
    max,
  });


  const [minValue, setMinValue] = React.useState(start[0]);
  const [maxValue, setMaxValue] = React.useState(start[1]);

  const handleMinInputChange = (e) => {
    setMinValue(e);
  };

  const handleMaxInputChange = (e) => {
    setMaxValue(e);
  };



  const handleBlur = () => {

    refine([minValue, maxValue]);
  };
   const [sliderValue, setSliderValue] = React.useState([min,max]);
  React.useEffect(() => {
    setSliderValue([100,150000]);
  
  }, [min]);

  const [showTooltip, setShowTooltip] = React.useState(false);


  return (
    <Box w='100%'>

      <RangeSlider


  defaultValue={[100,150000]} // use sliderValue as the initial value
  min={100}
  max={150000}
  onChange={(v) => {setSliderValue(v)
    handleMinInputChange(v[0]);
    handleMaxInputChange(v[1]);}}
  onMouseEnter={() => setShowTooltip(true)}
  onMouseLeave={() => setShowTooltip(false)}
  step={1000}
  onChangeEnd={(v) => {


    handleBlur();

  }}
  value={[sliderValue[0],sliderValue[1]]}
            >
              <RangeSliderMark
                value={100}
                mt={['1px', '5px']}
                ml={['-1px', '-15px']}
                fontSize={['6px', '12px']}
              >
                100
              </RangeSliderMark>
              <RangeSliderMark
                value={45000}
                mt={['1px', '5px']}
                ml={['-1px', '-20px']}
                fontSize={['6px', '12px']}
              >
                45000
              </RangeSliderMark>
              <RangeSliderMark
                value={75000}
                mt={['1px', '5px']}
                ml={['-1px', '-20px']}
                fontSize={['6px', '12px']}
              >
               75000
              </RangeSliderMark>
              <RangeSliderMark
                value={110000}
                mt={['1px', '5px']}
                ml={['-1px', '-20px']}
                fontSize={['6px', '12px']}
              >
               110000
              </RangeSliderMark>
              <RangeSliderMark
                value={150000}
                mt={['1px', '5px']}
                ml={['-1px', '-20px']}
                fontSize={['6px', '12px']}
              >
               150000
              </RangeSliderMark>
              <RangeSliderTrack bg="#B1B0D5">
                <RangeSliderFilledTrack bg="#4eb64f" />
              </RangeSliderTrack>
              <Tooltip
                hasArrow
                bg="green.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue[0]}₹`}
                width={['32px', 47]}
                height={['15px', 41]}
                textAlign="center"
                fontSize={['8px', '10px']}
                p={0}
              >
                <RangeSliderThumb index={0} boxSize={[2, 3]} />
              </Tooltip>
              <Tooltip
                hasArrow
                bg="green.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue[1]}₹`}
                width={['32px', 47]}
                height={['15px', 41]}
                textAlign="center"
                fontSize={['8px', '10px']}
                 p={0}
              >
                <RangeSliderThumb index={1} boxSize={[2, 3]} />
              </Tooltip>
            </RangeSlider>
    </Box>
  );
}

export default CustomRangeInput;
