import { Button, HStack, Image, List, ListItem,Skeleton,Spinner,Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props{
  onSelectGenre:(genre:Genre)=>void;
}

const GenreList = ({onSelectGenre}:Props) => {
    const {data,isLoading,error}=useData<Genre>('/genres');

    if (error) return null;

    if(isLoading) return <Spinner/>

  return (
    <List>
        {data.map(genre=><ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link' >{genre.name}</Button>
            </HStack>
            </ListItem>)}
    </List>
  )
}

export default GenreList
