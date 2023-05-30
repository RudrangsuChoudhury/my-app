import { Button } from "@chakra-ui/react";
import { useClearRefinements } from "react-instantsearch-hooks-web";


function CustomClearRefinements({handleSliderReset}) {
  const { canRefine, refine } = useClearRefinements();
    const handleClearFilters = () => {
    refine();
    handleSliderReset();
  };

  return (
    <Button width={['400px','100%']} onClick={handleClearFilters} disabled={!canRefine} colorScheme="blue">
      Clear Filters
    </Button>
  );
}

export default CustomClearRefinements;