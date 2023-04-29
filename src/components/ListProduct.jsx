import React,{useState} from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch,SearchBox,Hits,InfiniteHits} from 'react-instantsearch-hooks-web';
import ProductCard from './ProductCard';

import { useSelector } from 'react-redux';
import { RefinementList } from 'react-instantsearch-hooks-web';
import {
  List,
  ListItem,
  Text,
  useColorMode,

  Flex,
} from '@chakra-ui/react';
import { RangeInput } from 'react-instantsearch-hooks-web';
import CustomRangeInput from './customcomponent/RangeInput';
import CustomClearRefinements from './customcomponent/ClearRefine';
import { Pagination } from 'react-instantsearch-hooks-web';



  const searchClient = algoliasearch('Y23PP1M0JQ', '87ebb69c9bb80da0451b02f03a9b4d94');
const transformItems = (items, { results }) => {
  const transformedHits = items.map((item, index) => {
    return {
      ...item,
      position: { index, page: results.page },
      isDisplayed: false,
    };
  });

  return transformedHits;
};

const ListProduct = () => {
  const sort=useSelector(state=>state.sort)
  const colorMode = useColorMode();

 const [sliderValue, setSliderValue] = React.useState([100,150000]); // initial slider value

  const handleSliderReset = () => {
    setSliderValue([100, 150000]);
  // reset the slider value
  }




  return (
 <InstantSearch searchClient={searchClient} indexName={`${sort}`}



>

    <Flex direction='column' rowGap='10px' >
 <SearchBox placeholder="Search for products, brands,color "/>
 <CustomClearRefinements handleSliderReset={handleSliderReset}/>
 <Flex columnGap={5} maxW='100%'>
     <Flex
            bg={colorMode === 'light' ? 'white' : '#5E565E'}
            p={[1, 10]}
            width={[100, 320]}
            borderRadius="10px"
            padding="10px 15px"
            direction={'column'}
            rowGap="10px"
          >
            <Text
              fontSize={['8px', '16px']}
              lineHeight={['10px', '20px']}
              fontWeight={600}
              color={colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'}
            >
              Shop by Categories
            </Text>
                    <RefinementList attribute="categories.name"


  translations={{

    noResultsText: 'No categories matching your query.',



  }}/>
          </Flex>
          <Flex
            p={[1, 5]}
            width={[100, 320]}
            bg={colorMode === 'light' ? 'white' : '#5E565E'}
            borderRadius="10px"
            padding="10px 15px"
            direction="column"
            rowGap={[1, 5]}
          >
            <Flex align='center' justify='space-between'>


            </Flex>




            <Text
              fontWeight={600}
              color={colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'}
              fontSize={['10px', '14px']}
            >
              Colors
            </Text>
            <Flex>
              <RefinementList attribute="attribute_Color.value"




  translations={{

    noResultsText: 'No colors matching your query.',



  }}/>



        </Flex>

          </Flex>
            <Flex
            p={[1, 5]}
            width={[100, 320]}
            bg={colorMode === 'light' ? 'white' : '#5E565E'}
            borderRadius="10px"
            padding="10px 15px"
            direction="column"
            rowGap={[1, 5]}
          >
            <Flex align='center' justify='space-between'>


            </Flex>
            <Text
              fontWeight={600}
              color={colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'}
              fontSize={['10px', '14px']}
            >
              Price
            </Text>




            <Flex>

 <CustomRangeInput attribute="price.raw" min={sliderValue[0]} max={sliderValue[1]}
 handleSliderReset={handleSliderReset}
 />



        </Flex>

          </Flex>





          </Flex>



<Flex direction='column' align='center' justify='center' rowGap='10' >
          <Hits
          transformItems={transformItems}
          results='true'
          hitComponent={({ hit }) => (
            <ProductCard key={hit.id}  hit={hit} />
          )}
        />


<Pagination totalPages={6} />
</Flex>




      </Flex>
    </InstantSearch>
  )
}
export default ListProduct