import React from 'react';

import {
    Box,
    Center,
    Image,
    Badge,
    Button,
} from '@chakra-ui/react';
import {StarIcon} from "@chakra-ui/icons";

const Index = ({name, brand }) => {
    const property = {
        imageUrl: "http://ddl.mn/wp-content/uploads/2021/05/zx7-315gt-200x200.jpg",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Багаж",
        formattedPrice: "1,9000.00₮",
        reviewCount: 34,
        rating: 4,
    }
    return (
        <>
            <Center py={6}>
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" maxWidth={260} boxShadow="md">
                    <Image src={property.imageUrl} alt={property.imageAlt} />
                    <Box p="3">
                        <Box display="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="blue">
                                Шинэ
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                                {property.beds} beds &bull; {property.baths} baths
                            </Box>
                        </Box>

                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            textAlign={"left"}
                            lineHeight="tight"
                            isTruncated
                        >
                            {property.title}
                        </Box>

                        <Box>
                            {property.formattedPrice}
                        </Box>

                    </Box>
                </Box>
            </Center>
            <Button
                mt={10}
                w={'full'}
                bg={'green.400'}
                color={'red'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                    bg: 'green.500',
                }}
                _focus={{
                    bg: 'green.500',
                }}>
                Харах
            </Button>
        </>
    )
}
export default Index;
